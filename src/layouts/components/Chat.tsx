import React from 'react'
import styled from 'styled-components'

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
          <button type="button" onClick={onRefreshChatClick}>
            Refresh
          </button>
        </div>
        <button type="button" onClick={onToggleChatPositionClick}>
          Swap
        </button>
        <button type="button" onClick={onPopoutChatClick}>
          Popout
        </button>
        <button type="button" onClick={onCloseChatClick}>
          Close
        </button>
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
  padding: 4px;
  height: 40px;
`

const EmbeddedChat = styled.iframe`
  flex: 1;
  border: none;
`

export default Chat
