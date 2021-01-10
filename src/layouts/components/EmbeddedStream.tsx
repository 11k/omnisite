import React from 'react'
import styled from 'styled-components'

const EmbeddedStream = ({ style }) => {
   return (
      <StyledEmbeddedStream
         style={style}
         src="https://player.twitch.tv?channel=destiny&parent=localhost"
      />
   )
}

const StyledEmbeddedStream = styled.iframe`
   border: none;
`

export default EmbeddedStream
