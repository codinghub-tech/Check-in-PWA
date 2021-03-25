import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const loadMenuReq = () => ({
  type: ACTION.LOAD_MENU_REQ,
})

export const loadMenuSuccess = (payload) => ({
  type: ACTION.LOAD_MENU_SUCCESS,
  payload
})

export const loadMenuFailure = () => ({
  type: ACTION.LOAD_MENU_FAILURE,
})

export const getpromosReq = () => ({
  type: ACTION.GET_PROMOS_REQ,
})

export const getpromosSuccess = (payload) => ({
  type: ACTION.GET_PROMOS_SUCCESS,
  payload
})

export const getpromosFailure = (payload) => ({
  type: ACTION.GET_PROMOS_FAILURE,
  payload
})

