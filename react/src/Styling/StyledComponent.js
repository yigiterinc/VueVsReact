import React from 'react'
import styled, { css } from 'styled-components'

// Use Title and Wrapper like any other React component – except they're styled!
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
`

function StyledComponent() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  )
}

export default StyledComponent
