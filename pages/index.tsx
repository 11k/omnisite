import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

import { Default } from 'layouts'

const Home = (): JSX.Element => <StyledContainer>:&#41;</StyledContainer>

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`
Home.layout = Default
export default Home
