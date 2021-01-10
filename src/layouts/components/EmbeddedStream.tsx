import React from 'react'
import styled from 'styled-components'

const EmbeddedStream = ({ style, embedUrl }) => {
   return <StyledEmbeddedStream key={embedUrl} style={style} src={embedUrl} />
}

const StyledEmbeddedStream = styled.iframe`
   border: none;
`

export default EmbeddedStream
