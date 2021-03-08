import make_API_call from "../../../providers/REST_API"
import {
  setStateAction,
  loadRestaurentDetailsReq,
  loadRestaurentDetailsSuccess,
  loadRestaurentDetailsFailure
} from "../actions/actionCreator"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _load_restaurent_details = () => (dispatch, getState) => {
  dispatch(loadRestaurentDetailsReq())
  return make_API_call("get", "/sessions/active")
    .then(res => {
      console.log(res);
      dispatch(loadRestaurentDetailsSuccess(res))
    }).catch(() => {
      const msg = `Failed to load details`
      dispatch(loadRestaurentDetailsFailure(msg))
    })
}