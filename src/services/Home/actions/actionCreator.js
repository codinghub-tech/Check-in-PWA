import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const loadRestaurentDetailsReq = () => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_REQ,
})

export const loadRestaurentDetailsSuccess = (payload) => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_SUCCESS,
  payload
})

export const loadRestaurentDetailsFailure = () => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_FAILURE,
})
