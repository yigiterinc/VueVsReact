import { React, useState } from 'react'
import './styles.css'

function ConditionalStyling() {
  let [stylesApplied, setStylesApplied] = useState(false)

  return (
    <div>
      <button onClick={() => setStylesApplied(!stylesApplied)}>Click me</button>
      <p style={{ color: stylesApplied ? 'red' : 'green' }}>Red or Green</p>
      <p className={stylesApplied ? 'styleClass' : ''}>Red with class</p>
    </div>
  )
}

export default ConditionalStyling
