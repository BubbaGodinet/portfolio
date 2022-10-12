import FullStop from "components/FullStop"
import React from "react"
import styled from "styled-components"
import text from "styles/text"

type Props = {
  className: string
}
export default function MyWorkIntro({className}: Props) {
  return (
    <OuterWrapper>
      <FullStop>
        <Wrapper className={className}>
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
`
const TextLower = styled.h2`
  position: relative;
  top: 53vw;
  left: 14vw;
  margin: 0;
  ${text.h1p};
  color: white;
`
const OuterWrapper = styled.div`
  background-color: #10100e;
  width: 100%;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100vw;
  margin-top: -1px;
`