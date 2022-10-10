import React from "react"

import Layout from "components/Layout"
import Hero from 'sections/Hero/Hero'
import Scroll from "components/Scroll"
import Panel1 from "components/TunnelPanels/Panel1"

export default function IndexPage() {
  return (
    <Scroll>
      {/* <Hero /> */}
      <Panel1/>
    </Scroll>
  )
}


