import React, {useEffect} from "react"

import gsap from "gsap"
import { MotionPathPlugin, MotionPathHelper } from "gsap/all"
import styled from "styled-components"

// import Layout from "components/Layout"
import Scroll from "components/Scroll"
import { ReactComponent as BluePathSVG } from "images/global/Lines/BlueLine1.svg"
import { ReactComponent as DirtyPurpPathSVG } from "images/global/Lines/DirtyPurpLine1.svg"
import { ReactComponent as DirtyPurpPath2SVG } from "images/global/Lines/DirtyPurpLine2.svg"
import { ReactComponent as LavenderPathSVG } from "images/global/Lines/LavenderLine1.svg"
import { ReactComponent as LavenderPath2SVG } from "images/global/Lines/LavenderLine2.svg"
import { ReactComponent as PurplePathSVG } from "images/global/Lines/PurpleLine1.svg"
import { ReactComponent as YellowPathSVG } from "images/global/Lines/YellowLine1.svg"
import { ReactComponent as YellowPath2SVG } from "images/global/Lines/YellowLine2.svg"
import Hero from 'sections/01-Hero'
import Me from "sections/02-Me"
import MyWorkIntro from "sections/03-MyWorkIntro"
import media from "styles/media"
// import Contact from "sections/Contact"
// import Galileo from "sections/Work/01-Galileo"
// import Freshcut from "sections/Work/02-Freshcut"
// import RRE from "sections/Work/03-RRE"
// import Hume from "sections/Work/04-Hume"
// import Bigeye from "sections/Work/05-Bigeye"
gsap.registerPlugin(MotionPathPlugin, MotionPathHelper)

export default function IndexPage() {

useEffect(() => {
  const yellowtl = gsap
    .timeline({
      scrollTrigger: {
        scrub: true,
        trigger: ".hero",
        // markers: true,
        start: "top top",
      },
    })
    const yellow2tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: ".me",
        markers: true,
        start: "bottom 80%",
        end: "bottom+=200",
      },
    })

    
      yellowtl
        .to("#yellow", {
          opacity: 1,
          delay: 0.25,
        })
        .to("#yellow", {
          scale: 1.3,
          "background-color": "#BFBD50",
          motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
          },
        })
        .addLabel("secondTL")
      yellow2tl.to("#yellow", {
          scale: 2,
          motionPath: {
            path: "#YellowPath2",
            align: "#YellowPath2",
            alignOrigin: [0.5, 0.5],
          },
        }, "secondTL")


const bluetl = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    trigger: ".hero",
    // markers: true,
    start: "top top",
    end: "bottom+=100"
  },
})
      bluetl
        .to("#blue", {
          opacity: 1,
          delay: 0.25,
        })
        .to("#blue", {
          scale: 2.5,
          "background-color": "#4754BF",
          motionPath: {
            path: "#BluePath1",
            align: "#BluePath1",
            alignOrigin: [0.5, 0.5],
          },
        })



        const purpletl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: ".hero",
            // markers: true,
            start: "top top",
            end: "bottom+=200",
          },
        })
        purpletl
          .to("#purple", {
            opacity: 1,
          })
          .to("#purple", {
            scale: 2.5,
            "background-color": "#472573",
            motionPath: {
              path: "#PurplePath1",
              align: "#PurplePath1",
              alignOrigin: [0.5, 0.5],
            },
          })

          

        const lavendertl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: ".hero",
            // markers: true,
            start: "60% top",
            end: "bottom+=200",
          },
        })
        const lavender2tl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: ".me",
            // markers: true,
            start: "bottom bottom",
            end: "bottom+=200",
          },
        })
        lavendertl
          .to("#lavender", {
            opacity: 1,
          })
          .to("#lavender", {
            scale: 2.8,
            "background-color": "#BA85FF",
            motionPath: {
              path: "#LavenderPath1",
              align: "#LavenderPath1",
              alignOrigin: [0.5, 0.5],
            },
          })
          .addLabel('secondTL')
          lavender2tl.to("#lavender", {
              scale: 5,
              motionPath: {
                path: "#LavenderPath2",
                align: "#LavenderPath2",
                alignOrigin: [0.5, 0.5],
              },
            }, "secondTL")




            const dirtyPurptl = gsap.timeline({
              scrollTrigger: {
                scrub: true,
                trigger: ".hero",
                // markers: true,
                start: "top-=50",
                end: "bottom+=200",
              },
            })
            const dirtyPurp2tl = gsap.timeline({
              scrollTrigger: {
                scrub: true,
                trigger: ".me",
                // markers: true,
                start: "bottom 80%",
                end: "bottom+=200",
              },
            })
            dirtyPurptl
              .to("#dirtyPurp", {
                opacity: 1,
              })
              .to("#dirtyPurp", {
                scale: 8,
                "background-color": "#4C3E5C",
                motionPath: {
                  path: "#DirtyPurpPath1",
                  align: "#DirtyPurpPath1",
                  alignOrigin: [0.5, 0.5],
                },
              })
              .addLabel('secondTL')
              dirtyPurp2tl.to("#dirtyPurp", {
                  scale: 2,
                  motionPath: {
                    path: "#DirtyPurpPath2",
                    align: "#DirtyPurpPath2",
                    alignOrigin: [0.5, 0.5],
                  },
                }, "secondTL")
}, [])

  return (
    <Scroll className="scroll">
      <YellowCircle id="yellow" />
      <BlueCircle id="blue" />
      <PurpleCircle id="purple" />
      <LavenderCircle id="lavender" />
      <DirtyPurpCircle id="dirtyPurp" />
      <YellowWrapper>
        <Yellow1 />
      </YellowWrapper>
      <YellowWrapper2>
        <Yellow2 />
      </YellowWrapper2>
      <BlueWrapper>
        <Blue1 />
      </BlueWrapper>
      <PurpleWrapper>
        <Purple1 />
      </PurpleWrapper>
      <LavenderWrapper>
        <Lavender1 />
      </LavenderWrapper>
      <LavenderWrapper2>
        <Lavender2 />
      </LavenderWrapper2>
      <DirtyPurpWrapper>
        <DirtyPurp1 />
      </DirtyPurpWrapper>
      <DirtyPurp2Wrapper>
        <DirtyPurp2 />
      </DirtyPurp2Wrapper>
      <Hero className="hero" />
      <Me className="me" />
      <MyWorkIntro className="mywork" />
      {/* <Galileo className="gal" /> */}
      {/* <Freshcut className="fresh" /> */}
      {/* <RRE className="rre" /> */}
      {/* <Hume className="hume" /> */}
      {/* <Bigeye className="big" /> */}
      {/* <Contact className="contact" /> */}
    </Scroll>
  )
}
const DirtyPurpWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 62vw;
  left: 49vw;
  width: 43vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const DirtyPurp1 = styled(DirtyPurpPathSVG)`
  position: relative;
  opacity: 0;
`

const DirtyPurp2Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 162vw;
  left: 10vw;
  width: 84vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const DirtyPurp2 = styled(DirtyPurpPath2SVG)`
  position: relative;
  opacity: 0;
`
const LavenderWrapper2 = styled.div`
  position: absolute;
  z-index: 1000;
  top: 161vw;
  left: 6vw;
  width: 47vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const Lavender2 = styled(LavenderPath2SVG)`
  position: relative;
  opacity: 0;
`
const LavenderWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 62vw;
  left: 8vw;
  width: 55vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const Lavender1 = styled(LavenderPathSVG)`
  position: relative;
  opacity: 0;
`
const PurpleWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 62vw;
  left: 49vw;
  width: 68vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const Purple1 = styled(PurplePathSVG)`
  position: relative;
  opacity: 0;
`
const BlueWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 62vw;
  left: 41vw;
  width: 25vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const Blue1 = styled(BluePathSVG)`
  position: relative;
  opacity: 0;
`
const Yellow1 = styled(YellowPathSVG)`
  position: relative;
  opacity: 0;
`
const YellowWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 62vw;
  left: 6vw;
  width: 44vw;
  /* border: 1px solid red; */


  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`

const Yellow2 = styled(YellowPath2SVG)`
  position: relative;
  /* opacity: 0; */
`
const YellowWrapper2 = styled.div`
  position: absolute;
  z-index: 1000;
  top: 62vw;
  left: 6vw;
  width: 44vw;
  border: 1px solid red;

  ${media.fullWidth} {
    top: 1037px;
    left: 274px;
    width: 418px;
  }
`
const YellowCircle = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5.208vw;
  height: 5.208vw;
  border-radius: 3.472vw;
  z-index: 10;
  background-color: white;
`

const BlueCircle = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5.208vw;
  height: 5.208vw;
  border-radius: 3.472vw;
  z-index: 10;
  background-color: white;
`

const PurpleCircle = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5.208vw;
  height: 5.208vw;
  border-radius: 3.472vw;
  background-color: white;
`

const LavenderCircle = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5.208vw;
  height: 5.208vw;
  border-radius: 3.472vw;
  background-color: white;
`

const DirtyPurpCircle = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5.208vw;
  height: 5.208vw;
  border-radius: 3.472vw;
  background-color: white;
`


