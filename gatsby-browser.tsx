/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */
/* eslint-disable no-console */
import "styles/fonts/typography.css"
import "normalize.css"
import React from "react"

import gsap from "gsap"
import { MotionPathPlugin, DrawSVGPlugin } from "gsap/all"
import { CSSPlugin } from "gsap/CSSPlugin"
import { CustomEase } from "gsap/CustomEase"
import { MotionPathHelper } from "gsap/MotionPathHelper"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Providers from "components/Providers"

gsap.registerPlugin(
  CSSPlugin,
  CustomEase,
  MorphSVGPlugin,
  ScrollToPlugin,
  DrawSVGPlugin,
  MotionPathPlugin,
  MotionPathHelper,
  ScrollTrigger,
  ScrollSmoother
)
export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <div>
      {element}
    </div>
  )
}
