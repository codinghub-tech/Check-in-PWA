import { MenuItem } from "@material-ui/core";
import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignupPage from "./services/Authentication/pages/SignupPage"
import HomePage from './services/Home/pages/HomePage'
import MenuPage from './services/MenuItem/pages/MenuPage'
// import RoomServices from './services/RoomServices/components/RoomServices'
import { connect } from "react-redux"
import slides from './services/MenuItem/components/Slides'

import { useSelector } from "react-redux"
import axios from "axios";
function App(props) {
  const { state } = props
  useEffect(() => {

  }, [])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {
            state.isLoggedIn ?
              <>
                <Route path="/Home" component={HomePage} />
                <Route path="/Menu" component={MenuPage} />
                <Route path="/slides" component={slides} />
                <Route exact path="/" component={HomePage} />
              </>
              :
              <>
                <Route exact path="/" component={SignupPage} />
                <Route path="/signup" component={SignupPage} />
              </>
          }



        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.login
  }
}

export default connect(mapStateToProps, null)(App)