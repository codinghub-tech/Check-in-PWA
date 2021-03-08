import React from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import TextInput from "../../../shared/components/TextInput/Basic"
import Button from "../../../shared/components/Button/Basic"
import { _set_state, _authenticate_via_number } from '../middleware'

function AskContact(props) {
  const { setState, authenticateViaNumber } = props
  const [phonenumber, setPhonenumber] = React.useState("")
  const handleProceed = () => {
    authenticateViaNumber(phonenumber)
    setState({
      askingProfileDetails: false,
      askingContact: false,
      askingOTP: true,
    })
  }

  const handlePhone = (val) => {
    setPhonenumber(val)
  }
  return (
    <div>
      <div style={{ fontWeight: 400, fontSize: 30 }} >Welcome,</div>
      <div style={{ fontWeight: 200, fontSize: 20 }} >Login to access the account</div>
      <br />
      <br />
      <Grid container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} >
          <TextInput
            fullWidth
            label={"Contact No"}
            placeholder={"Enter your Contact Number"}
            InputLabelProps={{
              shrink: true,
              style: { color: '#fff' },
            }}
            value={phonenumber}
            onChange={(e) => handlePhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={1} ></Grid>
      </Grid>
      <br />
      <br />
      <Grid container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} >
          <Button
            fullWidth
            onClick={handleProceed}
            style={{ textTransform: 'uppercase', color: '#ff5656' }}
          >
            Proceed
          </Button>
        </Grid>
        <Grid item xs={1} ></Grid>
      </Grid>
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
    setState: (obj) => dispatch(_set_state(obj)),
    authenticateViaNumber: (number) => dispatch(_authenticate_via_number(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskContact)