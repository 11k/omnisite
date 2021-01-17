import React from 'react'
import styled from 'styled-components'
import {
  SyncAlt,
  ExchangeAlt,
  ExternalLinkSquareAlt,
  Times,
} from '@styled-icons/fa-solid'

import { ChatActionBarButton } from 'layouts/components'

type Props = {
  style?: React.CSSProperties
}

const Chat: React.FunctionComponent<Props> = ({
  style,
  chatRefreshKey,
  onRefreshChatClick,
  onToggleChatPositionClick,
  onPopoutChatClick,
  onCloseChatClick,
}) => {
  return (
    <Container style={style}>
      <ChatActionBar>
        <div style={{ flex: 1 }}>
          <ChatActionBarButton onClick={onRefreshChatClick}>
            <SyncAlt />
          </ChatActionBarButton>
        </div>
        <ChatActionBarButton onClick={onToggleChatPositionClick}>
          <ExchangeAlt />
        </ChatActionBarButton>
        <ChatActionBarButton onClick={onPopoutChatClick}>
          <ExternalLinkSquareAlt />
        </ChatActionBarButton>
        <ChatActionBarButton onClick={onCloseChatClick}>
          <Times />
        </ChatActionBarButton>
      </ChatActionBar>
      <EmbeddedChat
        key={chatRefreshKey}
        src="https://www.destiny.gg/embed/chat"
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ChatActionBar = styled.div`
  display: flex;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #040404;
  color: #444;
`

const EmbeddedChat = styled.iframe`
  flex: 1;
  border: none;
`

export default Chat
