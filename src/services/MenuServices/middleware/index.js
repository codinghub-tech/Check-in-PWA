import make_API_call from "../../../providers/REST_API"
import {
  setStateAction,
  loadMenuReq,
  loadMenuSuccess,
  loadMenuFailure
} from "../actions/actionCreator"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _load_menu = () => (dispatch) => {
  dispatch(loadMenuReq())
  return make_API_call("get", "/menus/restaurants/11/available/")
    .then(res => {
      dispatch(loadMenuSuccess(res))
    }).catch(err => {
      const msg = `Failed to get menu items`
      dispatch(loadMenuFailure(msg))
    })
}