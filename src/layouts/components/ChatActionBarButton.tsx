import React from 'react'
import styled from 'styled-components'

import { colors } from 'design-system'

const ChatActionBarButton = ({ children, onClick }) => {
  return (
    <StyledChatActionBarButton onClick={onClick}>
      {children}
    </StyledChatActionBarButton>
  )
}

const StyledChatActionBarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 100%;
  cursor: pointer;
  color: #444;

  &:hover {
    color: ${colors.light};
  }

  & > svg {
    width: 14px;
    height: 14px;
  }
`

export default ChatActionBarButton
