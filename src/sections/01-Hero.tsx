import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap'
import styled from "styled-components"
import text from "styles/text"
import media from "styles/media"
import {ReactComponent as CircleDown} from 'images/global/circleDownArrow.svg'

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

  type Props = {
    className: string
  }

export default function Hero({ className }: Props) {
  const [nextIndex, setNextIndex] = useState(0)
  const allWelcomes = welcomes.map((welcome, index) => (
    <WelcomeWords key={welcome} id={`ww-${index}`}>
      {welcome}
    </WelcomeWords>
  ))

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        let index = nextIndex + 1
        if (index > welcomes.length) {
          index = 0
        }
        setNextIndex(index)
      },
    })

    if (nextIndex === 0) {
      tl.to(`#ww-${nextIndex}`, {
        duration: 2,
        opacity: 1,
      })
    }
    tl.to(`#ww-${nextIndex}`, {
      opacity: 1,
      duration: 0.1,
    })
    if (nextIndex === welcomes.length - 1) {
      tl.to(`#ww-${nextIndex}`, {
        duration: 3,
        opacity: 1,
      })
        .to(".downArrow", {
            opacity: 1,
            duration: 1,
          }, ">-2")
        .addPause()
        
    }
    tl.to(`#ww-${nextIndex}`, {
      duration: 0.05,
      opacity: 0,
    })

    return () => {
      tl.kill()
    }
  }, [nextIndex])

  return (
    <Wrapper className={className}>
        <WordContainer>{allWelcomes}</WordContainer>
        <DownArrow className="downArrow" />  
    </Wrapper>
  )
}

const DownArrow = styled(CircleDown)`
  position: relative;
  fill: #ffffe3;
  top: 60.486vw;
  width: 3.736vw;
  height: 3.736vw;
  opacity: 0;

  ${media.fullWidth} {
    top: 871px;
    width: 54px;
    height: 54px;
  }
`
const WordContainer = styled.div`
  position: relative;
  top: 25vw;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  ${media.fullWidth} {
    top: 360px;
  }
`
const WelcomeWords = styled.h1`
  ${text.h1};
  color: #ffffe3;
  opacity: 0;
  position: absolute;
`
const Wrapper = styled.div`
  background-color: #10100e;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 71.111vw;
  z-index: 10;

  ${media.fullWidth} {
    height: 1024px;
  }
`