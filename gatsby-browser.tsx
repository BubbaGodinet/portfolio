/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */
/* eslint-disable no-console */
import "styles/fonts/typography.css"
import "normalize.css"
import React from "react"

import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import BlueTransition from "components/BlueTransition"
import GreenTransition from "components/GreenTransition"
import Providers from "components/Providers"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <div>
      {/* <BlueTransition /> */}
      {/* <GreenTransition /> */}
      {element}
    </div>
  )
}
