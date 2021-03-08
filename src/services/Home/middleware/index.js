import make_API_call from "../../../providers/REST_API"
import { loadRestaurentDetailsAction, setStateAction } from "../actions/actionCreator"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _load_restaurent_details = () => (dispatch, getState) => {
  const details = getState().home.details
  const initiator = {
    isLoading: true,
    error: "",
    ...details
  }
  dispatch(setStateAction(initiator))
  // return make_API_call("get", "/sessions/active/check")
  //   .then(res => {
  //     console.log(res);
  //   }).catch(err => err)
  const data = {
    "pk": 1410,
    "bill": "0.00",
    "checked_in": "2021-03-04T00:22:00.618939+05:30",
    "checked_out": null,
    "restaurant": {
      "pk": "11",
      "display_name": "The Tripling Bistro",
      "display_pic_url": "https://storage.googleapis.com/checkin-app-18.appspot.com/images/shops/11/logo_3523.jpg"
    },
    "is_public": true,
    "host": null,
    "customers": [
      {
        "pk": 1069,
        "user": {
          "pk": 104,
          "display_name": "Anonymous ",
          "display_pic_url": null
        },
        "is_owner": true,
        "is_payee": false,
        "is_accepted": true
      }
    ],
    "is_requested_checkout": false
  }
  dispatch(loadRestaurentDetailsAction(data))
}