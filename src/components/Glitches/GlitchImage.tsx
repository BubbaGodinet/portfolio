import React, { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import styled, { createGlobalStyle } from "styled-components"
import textStyles from "styles/text"
import media from "styles/media"

type Props = {
  children: any
}

export default function GlitchEffect({ children }: Props) {
  
$(function () {
  $(".glitch-img").mgGlitch({
    // set 'true' to stop the plugin
    destroy: false,
    // set 'false' to stop glitching
    glitch: true,
    // set 'false' to stop scaling
    scale: true,
    // set 'false' to stop glitch blending
    blend: true,
    // select blend mode type
    blendModeType: "hue",
    // set min time for glitch 1 elem
    glitch1TimeMin: 10,
    // set max time for glitch 1 elem
    glitch1TimeMax: 100,
    // set min time for glitch 2 elem
    glitch2TimeMin: 10,
    // set max time for glitch 2 elem
    glitch2TimeMax: 300,
  })
})

  return (
    <Wrapper id="txt">
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 80px;
  background-color: #fff;
  width: calc(100% - 160px);
  height: calc(100% - 160px);
  overflow: hidden;
`
