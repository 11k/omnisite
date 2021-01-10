import React from 'react'
import styled from 'styled-components'

import { Default } from 'layouts'
import { EmbeddedStream } from 'layouts/components'

const BigScreen = (): JSX.Element => {
  return (
    <Container>
      <EmbeddedStream style={{ flex: 1 }} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

BigScreen.layout = Default
export default BigScreen
