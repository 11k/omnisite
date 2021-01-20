/**
 * TODO: Consider expanding this context to replace NextAuth entirely, see:
 * https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
 */

import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { NextPage } from 'next'

import { ApiService } from 'services'
import { hydrateFromJwt } from 'store/slices/userSlice'
import { Routes } from 'lib/enums'

type CtxProps = {
  isAuthenticated: boolean
  user: {
    email: string
    userId: string
    username: string
  }
  loading: boolean
}

const AuthContext = createContext<Partial<CtxProps>>({})

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const dispatch = useDispatch()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && session?.accessToken) {
      ApiService.setBearerToken(session.accessToken)
      dispatch(hydrateFromJwt(session.user))
    }
  }, [dispatch, loading, session])

  return (
    <AuthContext.Provider
      value={
        {
          isAuthenticated: !!session?.user,
          user: session?.user,
          loading,
        } as CtxProps
      }
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

// TODO: Add type for layout property
export const withAuth = (Component: NextPage) => (): JSX.Element => {
  const router = useRouter()
  const { isAuthenticated, loading } = useAuth()
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(Routes.INDEX)
    }
  }, [loading, isAuthenticated, router])
  return <Component />
}
