function Address({ city, street, postalCode, houseNumber }) {
  return (
    <div>
      <p>City: {city}</p>
      <p>Street: {street}</p>
      <p>Postal Code: {postalCode}</p>
      <p>House Number: {houseNumber}</p>
    </div>
  )
}

export default Address
