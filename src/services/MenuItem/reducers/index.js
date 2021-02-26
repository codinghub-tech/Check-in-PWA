import { combineReducers } from "redux"
import { HomeReducer } from "./MenuReducers"


const menuReducer = combineReducers({
    data: MenuReducer
})

export default menuReducer