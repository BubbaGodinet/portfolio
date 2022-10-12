import React from "react"

import styled from "styled-components"

import media from "styles/media"

interface SplitContentProps {
  /**
   * exactly two children are required, the first is the left side, the second is the right side
   * if reversed is true, they will swap
   */
  children: readonly [React.ReactNode, React.ReactNode]
  /**
   * if true, the right element will be displayed first when vertical
   */
  reverse?: boolean
  className?: string
}

export default function SplitContent({
  children,
  reverse = false,
  className = "",
}: SplitContentProps) {
  return (
    <Wrapper className={className} reverse={reverse}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  reverse: boolean
}>`
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
`
