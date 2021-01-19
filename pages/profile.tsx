import React from 'react'
import styled from 'styled-components'
import { signOut } from 'next-auth/client'
import { Button, Container } from 'react-bootstrap'

import { Default } from 'layouts'
import { ApiService } from 'services'
import { useAuth, withAuth } from 'contexts'

const callTestRoute = async () => {
  await ApiService.testRoute()
}

const Profile = () => {
  const test = useAuth()
  console.log(test)
  return (
    <StyledContainer>
      <Button onClick={callTestRoute}>Test Protected Route</Button>
      <Button onClick={signOut}>Sign Out</Button>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ExportedProfile = withAuth(Profile)
ExportedProfile.layout = Default
export default ExportedProfile
