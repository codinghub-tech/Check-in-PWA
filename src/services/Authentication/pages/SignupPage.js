import React from 'react'
import { connect } from "react-redux"

import MarketImage from "../../../assets/authentication/market.png"
import Logo from "../../../assets/authentication/logo.png"
import WaveShapeImage from "../../../assets/authentication/path_2.jpg"
import BottomDisplay from "../../../assets/authentication/bottomdisplay.jpg"


import { useSelector } from "react-redux"
import AskContact from '../components/AskContact'
import AskOTP from '../components/AskOTP'
import AskProfileDetails from '../components/AskProfileDetails'
import LandingPage from '../components/LandingPage'

function SignupPage(props) {

  const { state } = props
  if (state.showLandingPage)
    return <LandingPage />
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
          {
            state.askingContact ?
              <AskContact />
              :
              null
          }
          {
            state.askingOTP ?
              <AskOTP />
              :
              null
          }
          {
            state.askingProfileDetails ?
              <AskProfileDetails />
              :
              null
          }


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

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup
  }
}

export default connect(mapStateToProps, null)(SignupPage)
