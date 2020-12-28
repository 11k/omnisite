import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { Header } from './components'

type Props = {
  children?: ReactNode
  title: string
}

const Main = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header />
        <Container>{children}</Container>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default Main
