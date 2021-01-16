import React, { useEffect, useState, useReducer } from 'react'
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

  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [chatRefreshKey, refreshChat] = useReducer((x) => x + 1, 0)
  const [chatOnLeft, setChatOnLeft] = useState(false)
  const [showChat, setShowChat] = useState(true)

  const handleRefreshChatClick = () => {
    refreshChat()
  }

  const handleToggleChatPositionClick = () => {
    setChatOnLeft((previousChatOnLeft) => {
      const newChatOnLeft = !previousChatOnLeft
      window.localStorage.setItem('chatOnLeft', newChatOnLeft ? 'true' : '')
      return newChatOnLeft
    })
  }

  const handlePopoutChatClick = () => {
    setShowChat(false)
    window.open(
      'https://www.destiny.gg/embed/chat',
      '_blank',
      'height=500,width=420'
    )
  }

  const handleCloseChatClick = () => {
    setShowChat(false)
  }

  useEffect(() => {
    const initialChatOnLeft = !!window.localStorage.getItem('chatOnLeft')
    setChatOnLeft(initialChatOnLeft)

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
      {showChat && (
        <Chat
          style={{ width: '500px' }}
          chatRefreshKey={chatRefreshKey}
          onRefreshChatClick={handleRefreshChatClick}
          onToggleChatPositionClick={handleToggleChatPositionClick}
          onPopoutChatClick={handlePopoutChatClick}
          onCloseChatClick={handleCloseChatClick}
        />
      )}
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
