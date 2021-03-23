import { setStateAction } from "../actions/actionCreator"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}