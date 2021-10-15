import { React, useState } from 'react'

function TestUseState() {
  const [frameworkName, setFrameworkName] = useState('React')

  return (
    <div>
      <h1>useState API</h1>
      <p>Current Framework: {frameworkName}</p>
    </div>
  )
}

export default TestUseState
