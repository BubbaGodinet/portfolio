import React, { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import styled from "styled-components"
import textStyles from "styles/text"
import media from "styles/media"
import GlitchEffect from "components/Glitches/GlitchEffect"
import SplitContent from "components/SplitContent"
import Hume from "images/global/Hume.webp"

export default function Panel1() {

  return (
    <Wrapper>
      <SplitContent>
        <LeftSplit>
          {/* <GlitchEffect> */}
            Was able to create a dynamic page for their wellbeing section.
            Utilized React, Contentful, Netlify, Javascript, GraphQL, and
            Intersection observer for this site.
          {/* </GlitchEffect> */}
        </LeftSplit>
        <RightSplit>
          <Image src={Hume} alt="hume" />
        </RightSplit>
      </SplitContent>
    </Wrapper>
  )
}

const LeftSplit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 100vh;
  width: 50vw;
`

const RightSplit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  height: 100vh;
  width: 50vw;
`
const Image = styled.img`
  
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`
