import React from 'react'
import styled from 'styled-components'

type Props = {
  style?: React.CSSProperties
}

const Chat: React.FunctionComponent<Props> = ({ style }) => (
  <StyledChat style={style} src="https://www.destiny.gg/embed/chat" />
)

const StyledChat = styled.iframe`
  border: none;
`

export default Chat
