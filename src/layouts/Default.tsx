import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Head from 'next/head'

import Login from 'views/modals/Login'
import { Header } from './components'

type Props = {
  children: ReactNode
  title: string
}

const Main: FC<Props> = ({ children, title }) => {
  const isLoggedIn = !!useSelector((state) => state.user.id)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header isLoggedIn={isLoggedIn} />
        <Container>{children}</Container>
      </Container>
      <Login />
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default Main
