import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { NextPage } from 'next'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { colors } from 'design-system'
import store from 'store'

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
export default function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || Fragment
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
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
        <GlobalStyling />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </ThemeProvider> */}
      </Provider>
    </>
  )
}
