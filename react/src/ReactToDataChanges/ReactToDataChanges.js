import { React, useState, useEffect } from 'react'

function ReactToDataChanges() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [sum, setSum] = useState(0)

  useEffect(() => {
    console.log('I am here!')
    setSum(parseInt(number1) + parseInt(number2))
  }, [number1, number2])

  return (
    <div>
      <input
        onChange={(e) => setNumber1(e.target.value)}
        type="number"
        name="number 1"
      />
      <input
        onChange={(e) => setNumber2(e.target.value)}
        type="number"
        name="number 2"
      />
      {sum}
    </div>
  )
}

export default ReactToDataChanges
