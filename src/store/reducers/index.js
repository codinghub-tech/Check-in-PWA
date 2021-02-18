import { combineReducers } from "redux"
import authReducer from "../../services/Authentication/reducers"



const appReducer = combineReducers({
  authentication: authReducer
})

const rootReducer = (state, action) => {
  // if (action.type === ACTION.SIGNOUT_SUCCESS) {
  //   state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer
