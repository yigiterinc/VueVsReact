import React from 'react'

function HelloFunctions() {
  const to = 'Functions'

  function sayHello() {
    return 'Hello ' + to
  }

  const sayHelloModern = () => 'Hello ' + to

  return (
    <div>
      {sayHello()}
      <br />
      {sayHelloModern()}
    </div>
  )
}

export default HelloFunctions
