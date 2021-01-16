import React, { useReducer } from 'react'
import styled from 'styled-components'

type Props = {
  style?: React.CSSProperties
}

const Chat: React.FunctionComponent<Props> = ({
  style,
  onToggleChatPositionClick,
}) => {
  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [chatRefreshKey, forceUpdate] = useReducer((x) => x + 1, 0)
  const refreshChat = () => {
    forceUpdate()
  }

  return (
    <Container style={style}>
      <ChatActionBar>
        <div style={{ flex: 1 }}>
          <button type="button" onClick={refreshChat}>
            Refresh
          </button>
        </div>
        <button type="button" onClick={onToggleChatPositionClick}>
          Swap
        </button>
        <button type="button">Popout</button>
        <button type="button">Close</button>
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
