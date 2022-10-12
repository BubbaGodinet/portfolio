import React, { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import styled, { createGlobalStyle } from "styled-components"
import textStyles from "styles/text"
import media from "styles/media"

type Props = {
  children: any
}

export default function GlitchEffect({ children }: Props) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 6 })

    tl.to(".glitch", { duration: 0.1, skewX: 70, ease: "power4" })
      .to(".glitch", { duration: 0.04, skewX: 0, ease: "power4" })
      .to(".glitch", { duration: 0.04, opacity: 0 })
      .to(".glitch", { duration: 0.04, opacity: 1 })
      .to(".glitch", { duration: 0.04, x: -20 })
      .to(".glitch", { duration: 0.04, x: 0 })
      .add("split", 0)
      .to(".top", { duration: 0.5, x: -60, ease: "power4" }, "split")
      .to(".bottom", { duration: 0.5, x: 60, ease: "power4" }, "split")
      .to(".glitch", { duration: 0.08 }, "split")

      .to("#txt", { duration: 0, scale: 1.1 }, "split")
      .to("#txt", { duration: 0, scale: 1 }, "+=0.02")

      .to(".glitch", { duration: 0.08 }, "+=0.09")
      .to(".glitch", { duration: 0.03 }, "split")
      .to(".glitch", { duration: 0.03 }, "+=0.01")

      .to(".top", { duration: 0.2, x: 0, ease: "power4" })
      .to(".bottom", { duration: 0.2, x: 0, ease: "power4" })

      .to(".glitch", { duration: 0.2, scaleY: 1.1, ease: "power4" })
      .to(".glitch", { duration: 0.04, scaleY: 1, ease: "power4" })
  }, [])
  return (
    <Wrapper id="txt">
      <TopGlitch className="glitch top" id="top">
        {children}
      </TopGlitch>
      <BottomGlitch className="glitch bottom" id="bottom">
        {children}
      </BottomGlitch>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 33.472vw;
  height: 6.944vw;
  z-index: 2;
  color: #fff;
  ${textStyles.bodyXXL};

  .glitch {
    position: absolute;
  }
`
const TopGlitch = styled.div`
  -webkit-clip-path: inset(0 0 41% 0);
  clip-path: inset(0 0 41%);
`
const BottomGlitch = styled.div`
  font-size: 3.472vw;
  -webkit-clip-path: inset(58% 0 0 0);
  clip-path: inset(58% 0 0 0);
`



