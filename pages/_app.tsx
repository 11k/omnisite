import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment, ReactNode } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Provider as NextAuth } from 'next-auth/client'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { AuthProvider } from 'contexts'
import { colors } from 'design-system'
import wrapper from 'store'

type AppLayoutProps = {
  Component: NextPage & {
    layout?: (props: { children: ReactNode }) => JSX.Element
  }
  pageProps: any
}

const GlobalStyling = createGlobalStyle`
#__next { 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  font-size: 15px;
  color: ${colors.text2};
  background: ${colors.bgColor};
 }
`
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || Fragment
  const { session } = pageProps
  // let theme = 'light'

  // TODO: Implement theme with Redux
  // const currentTheme = useSelector()
  // currentTheme === 'light' ? (theme = lightTheme) : (theme = darkTheme);

  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <NextAuth session={session}>
        <AuthProvider>
          {/* <ThemeProvider theme={theme}> */}
          <GlobalStyling />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* </ThemeProvider> */}
        </AuthProvider>
      </NextAuth>
    </>
  )
}

export default wrapper.withRedux(MyApp)
