import { combineReducers } from "redux"
import { SignupReducer } from "./SignupReducer"


const authReducer = combineReducers({
  signup: SignupReducer
})

export default authReducer
