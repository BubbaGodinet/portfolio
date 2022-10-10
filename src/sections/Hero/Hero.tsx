import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap'
import styled from "styled-components"
import textStyles from "styles/text"
import media from "styles/media"
import GlitchEffect from "components/GlitchEffect"

  const welcomes = [
    "Welcome",
    "Bienvenidos",
    "Salut",
    "ようこそ",
    "Afio mai",
    "Bem-vinda",
    "Privet",
    "欢迎",
    "Welkom",
    "환영",
    "Come on in",
  ]

export default function Hero() {
  const RevealRef = useRef<HTMLDivElement>(null)
  const GlitchButtonRef = useRef<HTMLDivElement>(null)
  const [nextIndex, setNextIndex] = useState(0)
  const allWelcomes = welcomes.map((welcome, index) => (
      <WelcomeWords key={welcome} id={`ww-${index}`}>{welcome}</WelcomeWords>
  ))

useEffect(() => {
  const tl = gsap.timeline({
      onComplete: () => {
        let index = nextIndex + 1
        if (index > welcomes.length) {
          index = 0
        }
        setNextIndex(index)
      }
  })

  if (nextIndex === 0) {
    tl.to(`#ww-${nextIndex}`, {
      duration: 2,
      opacity: 1,
    })
  }
  tl.to(`#ww-${nextIndex}`, {
    opacity: 1,
    duration: .1
  })
  if (nextIndex === welcomes.length - 1) {
    tl.to(`#ww-${nextIndex}`, {
      duration: 3,
      opacity: 1,
    })
      .to(RevealRef.current, {
          duration: 3,
          yPercent: -10,
          ease: "bounce",
        }, "<")
      .to(GlitchButtonRef.current, {
          opacity: 1,
          duration: 2,
        }, ">-2")
        GlitchButtonRef.current?.addEventListener('click', () => {
          tl.to(RevealRef.current, {
            yPercent: -100,
            duration: 2,
            ease: 'elastic'
          })
        })
  }
  tl.to(`#ww-${nextIndex}`, {
    duration: .05,
    opacity: 0,
  })

  return () => {
    tl.kill();
  }
}, [nextIndex])


  return (
    <Wrapper>
      <Backdrop ref={RevealRef}>
        <WordContainer>{allWelcomes}</WordContainer>
        <GlitchButton ref={GlitchButtonRef}>Enter</GlitchButton>
      </Backdrop>
    </Wrapper>
  )
}

const GlitchButton = styled.div`
  ${textStyles.bodyDefault};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6.389vw;
  height: 5.208vw;
  width: 12.5vw;
  background-color: #ffffe3;
  color: black;
  position: relative;
  top: 80vw;
  opacity: 0;
`
const WordContainer = styled.div`
  position: relative;
  top: 30vw;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  ${media.fullWidth} {
    top: 432px;
  }
`
const WelcomeWords = styled.h1`
  ${textStyles.h1};
  color: #ffffe3;
  opacity: 0;
  position: absolute;
`
const Backdrop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #10100e;
  width: 100%;
  height: 105vh;
  border-radius: 0 0 3.472vw 3.472vw;

  ${media.fullWidth} {
    border-radius: 0 0 50px 50px;
  }
`
const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`