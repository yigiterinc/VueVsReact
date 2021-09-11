import Address from './Address'

function UserInfo() {
  return (
    <div>
      <p>Name: Yigit</p>
      <Address
        city="Istanbul"
        street="Ataturk Cad."
        postalCode="34840"
        houseNumber="92"
      ></Address>
    </div>
  )
}

export default UserInfo
