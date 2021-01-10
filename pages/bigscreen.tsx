import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Default } from 'layouts'
import { EmbeddedStream } from 'layouts/components'
import { embedDetailsFromHash } from 'lib/embed-details'
import { defaultEmbedDetails } from 'lib/constants'

const BigScreen = (): JSX.Element => {
  const [embedDetails, setEmbedDetails] = useState(defaultEmbedDetails)

  useEffect(() => {
    const handleHashChange = () => {
      const newEmbedDetails = embedDetailsFromHash(location.hash)
      if (newEmbedDetails) {
        setEmbedDetails(newEmbedDetails)
      } else {
        setEmbedDetails(defaultEmbedDetails)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

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
