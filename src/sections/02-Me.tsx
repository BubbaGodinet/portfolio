import React, {useEffect} from 'react'
import gsap from 'gsap'
import styled from "styled-components"
import text from 'styles/text';
import colors from 'styles/colors';
import Smile from 'images/global/Smile.jpg';
import FullStop from 'components/FullStop';
import media from 'styles/media'

 type Props = {
   className: string
 }
 
export default function Me({ className }: Props) {

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    })

    tl.to('.wave', {
      rotate: 15
    })
  }, [])
  return (
    <OuterWrapper>
      <FullStop>
        <Wrapper className={className}>
          <Image src={Smile} />
          <Text>
            Hey, Im Bubba <Wave className='wave'>👋🏽</Wave> Creative Software Developer out in
            Utah.{" "}
          </Text>
        </Wrapper>
      </FullStop>
    </OuterWrapper>
  )
}

const Wave = styled.div`
  display: inline-block;
`
const Text = styled.div`
  ${text.h3};
  color: ${colors.cream};
  z-index: 1;
`
const Image = styled.img`
  width: 33.75vw;
  height: 52.917vw;
  border-radius: 1.389vw;

  ${media.fullWidth} {
    width: 486px;
    height: 762px;
    border-radius: 20px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vw;
  margin-top: -1px;
  gap: 10.417vw;
  padding: 14.931vw 4.375vw;

  ${media.fullWidth} {
    gap: 150px;
    padding: 0 50px;
  }
`

const OuterWrapper = styled.div`
  background-color: #10100e;
  width: 100%;
`