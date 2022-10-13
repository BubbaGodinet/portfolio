import FullStop from "components/FullStop"
import React from "react"
import styled from "styled-components"

type Props = {
  className: string
  id: string
}

export default function Galileo({id, className}: Props) {
  return (
    <Wrapper id={id} className={className}>
      Contact
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`