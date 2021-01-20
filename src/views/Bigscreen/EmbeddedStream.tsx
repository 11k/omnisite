import React from 'react'
import styled from 'styled-components'

type Props = {
  style?: React.CSSProperties
  embedUrl: string
}

const EmbeddedStream: React.FC<Props> = ({ style, embedUrl }) => (
  <StyledEmbeddedStream key={embedUrl} style={style} src={embedUrl} />
)

const StyledEmbeddedStream = styled.iframe`
  border: none;
`

export default EmbeddedStream
