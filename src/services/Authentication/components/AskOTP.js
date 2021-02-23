import React from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"
import { _set_state } from '../middleware'

function AskOTP(props) {
  const { setState } = props
  const handleVerify = () => {
    setState({
      askingProfileDetails: true,
      askingContact: false,
      askingOTP: false
    })
  }

  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: 20 }} >OTP sent to 1234567899</div>
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
      <div style={{ fontWeight: 600, fontSize: 15 }} >
        Didn’t recieve the verification OTP? Resend Again
      </div>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (obj) => dispatch(_set_state(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskOTP)