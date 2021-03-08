import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const loadRestaurentDetailsAction = (payload) => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS,
  payload
})
