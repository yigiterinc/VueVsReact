import React from 'react'
import Child from './Child'

function Parent() {
  const compToBeRendered = (
    <div>
      <h1>Hello</h1>
      <button>Im button</button>
    </div>
  )

  return (
    <div>
      <Child compToBeRendered={compToBeRendered}></Child>
    </div>
  )
}

export default Parent
