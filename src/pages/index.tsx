import React, {useEffect} from "react"

import gsap from "gsap"
import { MotionPathPlugin, MotionPathHelper } from "gsap/all"
import styled from "styled-components"

// import Layout from "components/Layout"
import Scroll from "components/Scroll"
import { ReactComponent as BluePathSVG } from "images/global/Lines/BlueLine1.svg"
import { ReactComponent as BluePath2SVG } from "images/global/Lines/BlueLine2.svg"
import { ReactComponent as DirtyPurpPathSVG } from "images/global/Lines/DirtyPurpLine1.svg"
import { ReactComponent as DirtyPurpPath2SVG } from "images/global/Lines/DirtyPurpLine2.svg"
import { ReactComponent as LavenderPathSVG } from "images/global/Lines/LavenderLine1.svg"
import { ReactComponent as LavenderPath2SVG } from "images/global/Lines/LavenderLine2.svg"
import { ReactComponent as PurplePathSVG } from "images/global/Lines/PurpleLine1.svg"
import { ReactComponent as PurplePath2SVG } from "images/global/Lines/PurpleLine2.svg"
import { ReactComponent as YellowPathSVG } from "images/global/Lines/YellowLine1.svg"
import { ReactComponent as YellowPath2SVG } from "images/global/Lines/YellowLine2.svg"
import Hero from 'sections/01-Hero'
import Me from "sections/02-Me"
import MyWorkIntro from "sections/03-MyWorkIntro"
import media from "styles/media"
import FullStop from "components/FullStop"
import Contact from "sections/Contact"
import Galileo from "sections/Work/01-Galileo"
import Freshcut from "sections/Work/02-Freshcut"
import RRE from "sections/Work/03-RRE"
import Hume from "sections/Work/04-Hume"
import Bigeye from "sections/Work/05-Bigeye"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(MotionPathPlugin, MotionPathHelper, ScrollTrigger)

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
        // markers: true,
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
            path: "#YellowPath1",
            align: "#YellowPath1",
            alignOrigin: [0.5, 0.5],
          },
        })
        .addLabel("secondTL")
      yellow2tl.to("#yellow", {
          scale: 6,
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
const blue2tl = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    trigger: ".me",
    // markers: true,
    start: "bottom 80%",
    end: "bottom+=200",
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
        .addLabel("secondTL")
      blue2tl.to("#blue", {
          scale: 3.5,
          motionPath: {
            path: "#BluePath2",
            align: "#BluePath2",
            alignOrigin: [0.5, 0.5],
          },
        }, "secondTL")



        const purpletl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: ".hero",
            // markers: true,
            start: "top top",
            end: "bottom+=200",
          },
        })
        const purple2tl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: ".me",
            // markers: true,
            start: "95% bottom",
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
          .addLabel("secondTL")
        purple2tl.to("#purple", {
            scale: 5,
            motionPath: {
              path: "#PurplePath2",
              align: "#PurplePath2",
              alignOrigin: [0.5, 0.5],
            },
          }, "secondTL")

          

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

// useEffect(() => {
//   const sections = gsap.utils.toArray(".horzSection")

//   const scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: ".container",
//       pin: true,
//       scrub: true,
//       end: "+=3000",
//     },
//   })

//   // only show the relevant section's markers at any given time
//   gsap.set(
//     ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
//     { autoAlpha: 0 }
//   )
//   ;["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
//     ScrollTrigger.create({
//       trigger: "." + triggerClass,
//       containerAnimation: scrollTween,
//       start: "left 30%",
//       end: i === 3 ? "right right" : "right 30%",
//       markers: false,
//       onToggle: self =>
//         gsap.to(".marker-" + (i + 1), {
//           duration: 0.25,
//           autoAlpha: self.isActive ? 1 : 0,
//         }),
//     })
//   })

// }, [])

  return (
    <Scroll className="scroll">
      <Wrapper>
        <FullStop>
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
          <BlueWrapper2>
            <Blue2 />
          </BlueWrapper2>
          <PurpleWrapper>
            <Purple1 />
          </PurpleWrapper>
          <PurpleWrapper2>
            <Purple2 />
          </PurpleWrapper2>
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
        </FullStop>
        <Hero className="hero" />
        <Me className="me" />
        <HorizontalSections>
          <MyWorkIntro className="horzSection" id="mywork" />
          {/* <Galileo className="horzSection" id="gal" />
          <Freshcut className="horzSection" id="fresh" />
          <RRE className="horzSection" id="rre" /> */}
          {/* <Hume className="horizontalSection" id="hume" /> */}
          {/* <Bigeye className="horizontalSection" id="big" /> */}
          {/* <Contact className="contact" /> */}
        </HorizontalSections>
      </Wrapper>
    </Scroll>
  )
}

const HorizontalSections = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const DirtyPurpWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 62vw;
  left: 49vw;
  width: 43vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 893px;
    left: 706px;
    width: 619px;
  }
`
const DirtyPurp1 = styled(DirtyPurpPathSVG)`
  position: relative;
  opacity: 0;
`

const DirtyPurp2Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 162vw;
  left: 10vw;
  width: 84vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 2333px;
    left: 144px;
    width: 1210px;
  }
`
const DirtyPurp2 = styled(DirtyPurpPath2SVG)`
  position: relative;
  opacity: 0;
`
const LavenderWrapper2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 161vw;
  left: 6vw;
  width: 47vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 2318px;
    left: 86px;
    width: 677px;
  }
`
const Lavender2 = styled(LavenderPath2SVG)`
  position: relative;
  opacity: 0;
`
const LavenderWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 62vw;
  left: 8vw;
  width: 55vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 893px;
    left: 115px;
    width: 792px;
  }
`
const Lavender1 = styled(LavenderPathSVG)`
  position: relative;
  opacity: 0;
`
const PurpleWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 62vw;
  left: 49vw;
  width: 68vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 893px;
    left: 706px;
    width: 979px;
  }
`
const Purple1 = styled(PurplePathSVG)`
  position: relative;
  opacity: 0;
`
  const PurpleWrapper2 = styled.div`
    position: absolute;
    z-index: 1;
    top: 131vw;
    left: 13vw;
    width: 68vw;
    /* border: 1px solid red; */

    ${media.fullWidth} {
      top: 1886px;
      left: 187px;
      width: 979px;
    }
  `
const Purple2 = styled(PurplePath2SVG)`
  position: relative;
  opacity: 0;
`
const BlueWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 62vw;
  left: 41vw;
  width: 25vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 893px;
    left: 590px;
    width: 360px;
  }
`
const Blue1 = styled(BluePathSVG)`
  position: relative;
  opacity: 0;
`

const BlueWrapper2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 114vw;
  left: 34vw;
  width: 47vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1642px;
    left: 490px;
    width: 677px;
  }
`
const Blue2 = styled(BluePath2SVG)`
  position: relative;
  opacity: 0;
`
const Yellow1 = styled(YellowPathSVG)`
  position: relative;
  opacity: 0;
`
const YellowWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 62vw;
  left: 6vw;
  width: 44vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 893px;
    left: 86px;
    width: 634px;
  }
`

const Yellow2 = styled(YellowPath2SVG)`
  position: relative;
  opacity: 0;
`
const YellowWrapper2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 119vw;
  left: 6vw;
  width: 134vw;
  /* border: 1px solid red; */

  ${media.fullWidth} {
    top: 1714px;
    left: 86px;
    width: 1930px;
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
  z-index: 1;
  background-color: white;

  ${media.fullWidth} {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
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
  z-index: 1;
  background-color: white;

  ${media.fullWidth} {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
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

  ${media.fullWidth} {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
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
  z-index: 1;

  ${media.fullWidth} {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
`

const DirtyPurpCircle = styled.div`
  position: absolute;
  z-index: 5;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5.208vw;
  height: 5.208vw;
  border-radius: 3.472vw;
  background-color: white;

  ${media.fullWidth} {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
`


