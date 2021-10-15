import { React, useMemo, useState } from 'react'

function UseMemoTest() {
  const [favCities, setFavCities] = useState([
      'Istanbul',
      'München',
      'Los Angeles',
      'Rome',
      'Florence',
      'London',
      'San Francisco',
    ]),
    [usCities, setUsCities] = useState([
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Phoenix',
      'Arizona',
      'San Francisco',
      'Boston',
    ])

  const favCitiesInUs = useMemo(() => {
    return favCities.filter((city) => usCities.includes(city))
  }, [favCities, usCities])

  return (
    <div>
      <h3>Yigit's Favorite Cities are:</h3>
      {favCities.map((city) => (
        <p key={city}>{city}</p>
      ))}
      <h3>Yigit's Favorite Cities in US are:</h3>
      {favCitiesInUs.map((town) => (
        <p key={town}>{town}</p>
      ))}
      <button onClick={() => setFavCities([...favCities, 'Boston'])}>
        Click me to add
      </button>
    </div>
  )
}

export default UseMemoTest
