import { React, useState } from 'react'

import Child from './Child.js'

function Parent() {
  const [username, setUsername] = useState('')

  const submitForm = () => {
    console.log(username)
    // Post form data to api...
  }

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} type="text" />
      <Child handleButtonClicked={submitForm} />
    </div>
  )
}

export default Parent
