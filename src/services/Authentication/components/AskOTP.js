import React from 'react'
import { Grid } from "@material-ui/core"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"

function AskOTP(props) {

  const handleVerify = () => {

  }

  return (
    <div>
      <div style={{ fontWeight: 200, fontSize: 20 }} >OTP sent to 1234567899</div>
      <br />
      <br />
      <Grid container >
        <Grid item xs={3} >
          <BoxInput />
        </Grid>
        <Grid item xs={3} >
          <BoxInput />
        </Grid>
        <Grid item xs={3} >
          <BoxInput />
        </Grid>
        <Grid item xs={3} >
          <BoxInput />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} >
          <Button
            fullWidth
            onClick={handleVerify}
          >
            Verify
          </Button>
        </Grid>
        <Grid item xs={1} ></Grid>
      </Grid>
      <br />
      <div style={{ fontWeight: 200, fontSize: 15 }} >
        Didn’t recieve the verification OTP? Resend Again
      </div>

    </div>
  )
}

export default AskOTP
