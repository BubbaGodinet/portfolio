import React from "react"
import styled from "styled-components"
import media from "styles/media"

export default function FullStop({children}) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;

  ${media.fullWidth} {
    margin: 0 auto;
    max-width: 1440px;
  }
`