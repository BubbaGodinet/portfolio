import FullStop from "components/FullStop"
import React from "react"
import styled from "styled-components"
import text from "styles/text"
import media from "styles/media"

type Props = {
  className: string
  id: string
}

export default function MyWorkIntro({ className, id }: Props) {
  return (
    <OuterWrapper>
      <FullStop>
        <Wrapper id={id} className={className}>
          <TextUpper>Checkout</TextUpper>
          <TextLower>My Work</TextLower>
        </Wrapper>
      </FullStop>
    </OuterWrapper>
  )
}

const TextUpper = styled.h1`
  position: relative;
  top: 22vw;
  left: 1vw;
  margin: 0;
  ${text.h2p};
  color: white;

  ${media.fullWidth} {
    top: 317px;
    left: 14px;
  }
`
const TextLower = styled.h2`
  position: relative;
  z-index: 2;
  top: 53vw;
  left: 14vw;
  margin: 0;
  ${text.h1p};
  color: white;

  ${media.fullWidth} {
    top: 763px;
    left: 202px;
  }
`
const OuterWrapper = styled.div`
  background-color: #10100e;
  width: 100%;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100vw;
  margin-top: -1px;

  ${media.fullWidth} {
    height: 1440px;
  }
`