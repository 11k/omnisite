import React from 'react'
import styled from 'styled-components'

import { Default } from 'layouts'

const BigScreen = (): JSX.Element => <Container>:D</Container>

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`

BigScreen.layout = Default
export default BigScreen
