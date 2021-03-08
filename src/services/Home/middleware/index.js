import make_API_call from "../../../providers/REST_API"
import {
  setStateAction,
  loadRestaurentDetailsReq,
  loadRestaurentDetailsSuccess,
  loadRestaurentDetailsFailure,
  loadOrdersReq,
  loadOrdersSuccess,
  loadOrdersFailure,
  loadTrendingDishesReq,
  loadTrendingDishesSuccess,
  loadTrendingDishesFailure,

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

export const _load_orders = () => (dispatch, getState) => {
  dispatch(loadOrdersReq())
  return make_API_call("get", "/sessions/active/orders")
    .then(res => {
      dispatch(loadOrdersSuccess(res))
    }).catch(() => {
      const msg = `Failed to load orders`
      dispatch(loadOrdersFailure(msg))
    })

}
export const _load_trending_dishes = () => (dispatch, getState) => {
  dispatch(loadTrendingDishesReq())
  const restaurant_id = getState().home.details.data.restaurant.pk
  return make_API_call("get", `/menus/items/trending/restaurants/${parseInt(restaurant_id, 10)}`)
    .then(res => {
      dispatch(loadTrendingDishesSuccess(res))
    }).catch(() => {
      const msg = `Failed to load trending dishes`
      dispatch(loadTrendingDishesFailure(msg))
    })

}