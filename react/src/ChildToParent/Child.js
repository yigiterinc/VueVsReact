import React from 'react'

function Child({ handleButtonClicked }) {
  return (
    <div>
      <button onClick={() => handleButtonClicked()}>Submit</button>
    </div>
  )
}

export default Child
