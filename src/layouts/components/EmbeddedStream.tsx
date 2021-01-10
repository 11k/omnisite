import React from 'react'
import styled from 'styled-components'

import { embedUrlForEmbedDetails } from 'lib/embed-details'

const EmbeddedStream = ({ style, embedDetails }) => {
   const embedUrl = embedUrlForEmbedDetails(embedDetails)
   return <StyledEmbeddedStream key={embedUrl} style={style} src={embedUrl} />
}

const StyledEmbeddedStream = styled.iframe`
   border: none;
`

export default EmbeddedStream
