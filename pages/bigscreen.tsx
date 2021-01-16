import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Default } from 'layouts'
import { EmbeddedStream, Chat } from 'layouts/components'
import {
  embedUrlForEmbedDetails,
  embedDetailsFromHash,
} from 'lib/embed-details'
import { defaultEmbedDetails } from 'lib/constants'

const BigScreen = (): JSX.Element => {
  const [embedDetails, setEmbedDetails] = useState(defaultEmbedDetails)
  const [chatOnLeft, setChatOnLeft] = useState(false)

  const handleToggleChatPositionClick = () => {
    setChatOnLeft((previousChatOnLeft) => !previousChatOnLeft)
  }

  useEffect(() => {
    const handleHashChange = () => {
      const newEmbedDetails = embedDetailsFromHash(window.location.hash)
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

  const embedUrl =
    embedUrlForEmbedDetails(embedDetails) ??
    embedUrlForEmbedDetails(defaultEmbedDetails)

  return (
    <Container chatOnLeft={chatOnLeft}>
      <EmbeddedStream style={{ flex: 1 }} embedUrl={embedUrl} />
      <Chat
        style={{ width: '500px' }}
        onToggleChatPositionClick={handleToggleChatPositionClick}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: ${({ chatOnLeft }) => (chatOnLeft ? 'row-reverse' : 'row')};
`

BigScreen.layout = Default
export default BigScreen
