import React from 'react'
import MarketImage from "../../../assets/authentication/market.png"
import Logo from "../../../assets/authentication/logo.png"
import WaveShapeImage from "../../../assets/authentication/path_2.jpg"
import BottomDisplay from "../../../assets/authentication/bottomdisplay.jpg"

import TextInput from "../../../shared/components/TextInput/Basic"
import Button from "../../../shared/components/Button/Basic"

import { Grid } from "@material-ui/core"

function SignupPage() {
  return (
    <div>
      <img width="100%" src={MarketImage} />
      <div className="text-center" style={{ marginTop: "20px" }} >
        <img width="100" src={Logo} />
        <div style={{ letterSpacing: "0.95sp", fontSize: "28px", fontWeight: "bold", color: "#ff5656" }} >
          Checkin
        </div>
      </div>
      <div style={{ height: "100%", backgroundColor: "#ff5656" }} >
        <img width="100%" src={WaveShapeImage} />
        <div className="text-center text-light" >
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
              >
                Proceed
          </Button>
            </Grid>
            <Grid item xs={1} ></Grid>
          </Grid>
          <br />
          <br />
          <br />
          <br />

          <img width="100%" src={BottomDisplay} />
        </div>
      </div>
    </div>
  )
}

export default SignupPage
