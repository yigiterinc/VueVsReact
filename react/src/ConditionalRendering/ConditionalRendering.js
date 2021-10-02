import React from 'react'

function ConditionalRendering() {
  const condition1 = false
  const condition2 = false

  function getMessage() {
    let message = ''

    if (condition1) {
      message = 'condition1 is true'
    } else if (condition2) {
      message = 'condition2 is true'
    } else {
      message = 'all conditions are false'
    }

    return <h1>{message}</h1>
  }

  return <>{getMessage()}</>
}

export default ConditionalRendering
