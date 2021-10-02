import React from 'react'

function RenderingLists() {
  const cities = [
    'Istanbul',
    'München',
    'Los Angeles',
    'London',
    'San Francisco',
  ]

  return (
    <div>
      <h1>Cities</h1>
      {cities.map((city, index) => (
        <h4 key={index}>{city}</h4>
      ))}
    </div>
  )
}

export default RenderingLists
