import { combineReducers } from "redux"
import authReducer from "../../services/Authentication/reducers"
import homeReducer from "../../services/Home/reducers/index"



const appReducer = combineReducers({
  authentication: authReducer,
  home: homeReducer
})

const rootReducer = (state, action) => {
  // if (action.type === ACTION.SIGNOUT_SUCCESS) {
  //   state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer