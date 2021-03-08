import ACTION from "../actions/actionTypes"

const initState = {
    details: {
        isLoading: false,
        data: {
            "pk": 0,
            "bill": "",
            "checked_in": "",
            "checked_out": null,
            "restaurant": {
                "pk": "",
                "display_name": "",
                "display_pic_url": ""
            },
            "is_public": true,
            "host": null,
            "customers": [
                {
                    "pk": 0,
                    "user": {
                        "pk": 0,
                        "display_name": "",
                        "display_pic_url": null
                    },
                    "is_owner": true,
                    "is_payee": false,
                    "is_accepted": true
                }
            ],
            "is_requested_checkout": false
        },
        error: ""
    },
    orders: {
        isLoading: false,
        data: [],
        error: ""
    },
    trendingdishes: {
        isLoading: false,
        data: [],
        error: ""
    }
}


export const HomeReducer = (state = initState, action) => {
    switch (action.type) {

        case ACTION.SET_STATE:
            return {
                ...state,
                ...action.payload
            }

        case ACTION.LOAD_RESTAURENT_DETAILS_REQ:
            return {
                ...state,
                details: {
                    ...state.details,
                    error: "",
                    isLoading: true
                }
            }

        case ACTION.LOAD_RESTAURENT_DETAILS_SUCCESS:
            return {
                ...state,
                details: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        case ACTION.LOAD_RESTAURENT_DETAILS_FAILURE:
            return {
                ...state,
                details: {
                    ...state.details,
                    error: action.payload,
                    isLoading: false
                }
            }
        case ACTION.LOAD_ORDERS_REQ:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    error: "",
                    isLoading: true
                }
            }
        case ACTION.LOAD_ORDERS_SUCCESS:
            return {
                ...state,
                orders: {
                    isLoading: false,
                    data: action.payload,
                    error: ""

                }
            }
        case ACTION.LOAD_ORDERS_FAILURE:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    error: action.payload,
                    isLoading: false

                }
            }
        case ACTION.LOAD_TRENDING_DISHES_REQ:
            return {
                ...state,
                trendingdishes: {
                    ...state.trendingdishes,
                    error: "",
                    isLoading: true
                }
            }
        case ACTION.LOAD_TRENDING_DISHES_SUCCESS:
            return {
                ...state,
                trendingdishes: {
                    isLoading: false,
                    data: action.payload,
                    error: ""

                }
            }
        case ACTION.LOAD_TRENDING_DISHES_FAILURE:
            return {
                ...state,
                orders: {
                    ...state.trendingdishes,
                    error: action.payload,
                    isLoading: false

                }
            }

        default:
            return state
    }
}