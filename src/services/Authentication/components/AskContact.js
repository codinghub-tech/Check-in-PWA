import React from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import TextInput from "../../../shared/components/TextInput/Basic"
import Button from "../../../shared/components/Button/Basic"
import { _set_state } from '../middleware'

function AskContact(props) {
  const { setState } = props
  const handleProceed = () => {
    console.log(props);
    setState({
      askingOTP: true,
      askingContact: false
    })
  }
  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: 30 }} >Welcome,</div>
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
    setState: (obj) => dispatch(_set_state(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskContact)