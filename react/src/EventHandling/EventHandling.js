import { React, useState } from 'react'

import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core'

function EventHandling() {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [termsAccepted, setTermsAccepted] = useState(false)

  const submitForm = () => {
    console.log(username, password, termsAccepted)
  }

  const formContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  }

  return (
    <div style={formContainer}>
      <TextField
        onInput={(e) => setUsername(e.target.value)}
        id="outlined-basic"
        label="Username"
        variant="outlined"
      />
      <TextField
        onInput={(e) => setPassword(e.target.value)}
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
      />

      <FormControlLabel
        control={
          <Checkbox
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
        }
        label="Accept terms and conditions"
      />

      <Button variant="contained" color="primary" onClick={() => submitForm()}>
        Submit
      </Button>
    </div>
  )
}

export default EventHandling
