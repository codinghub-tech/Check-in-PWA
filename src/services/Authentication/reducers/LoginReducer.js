import ACTION from "../actions/actionTypes"

const initState = {
  isLoggedIn: true
}

export const LoginReducer = (state = initState, action) => {
  switch (action.type) {

    case ACTION.SET_STATE:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
