import { React, useState } from 'react'

function FormInputBinding() {
  const [userInput, setUserInput] = useState('Hello')

  return (
    <div>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => setUserInput('Goodbye')}>
        Click to say goodbye
      </button>
      {userInput}
    </div>
  )
}

export default FormInputBinding
