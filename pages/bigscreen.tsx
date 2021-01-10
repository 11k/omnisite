import React from 'react'
import styled from 'styled-components'

import { Default } from 'layouts'
import { EmbeddedStream } from 'layouts/components'

const BigScreen = (): JSX.Element => {
  const embedDetails = {
    platform: 'twitch',
    channel: 'destiny',
  }
  return (
    <Container>
      <EmbeddedStream style={{ flex: 1 }} embedDetails={embedDetails} />
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
