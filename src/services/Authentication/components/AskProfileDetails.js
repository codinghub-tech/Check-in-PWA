import React from 'react'
import { Grid } from "@material-ui/core"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import TextInput from "../../../shared/components/TextInput/Basic"
import Button from "../../../shared/components/Button/Basic"
import { useHistory } from 'react-router-dom'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { _set_state } from '../middleware'
import { connect } from "react-redux"

function AskProfileDetails(props) {
  const { setState } = props
  const history = useHistory()
  const handleProceed = () => {
    // history.push("/Home")
    setState({
      login: {
        isLoggedIn: true
      }
    })
  }

  return (
    <div>
      <div style={{ fontWeight: 400, fontSize: 12 }} >One step away from your first 500 Checkin CHIPS <InfoOutlinedIcon style={{ marginBottom: "-6px" }} fontSize="small" /></div>
      <br />
      <br />
      <Grid spacing={2} container >
        <Grid item xs={1} ></Grid>
        <Grid item xs={5} >
          <TextInput
            label={"First Name"}
            InputLabelProps={{
              shrink: true,
              style: { color: '#fff' },
            }}
          />
        </Grid>
        <Grid item xs={5} >
          <TextInput
            label={"Last Name"}
            InputLabelProps={{
              shrink: true,
              style: { color: '#fff' },
            }}
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
      <br />
      <div style={{ fontWeight: 400, fontSize: 12 }} >
        Earn 1000 Checkin Chips more with a, <a href="#" className="my-a" >Referal Code</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(AskProfileDetails)
