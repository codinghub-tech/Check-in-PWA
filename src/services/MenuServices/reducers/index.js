import ACTION from "../actions/actionTypes"

const initState = {
    menudata: {
        isLoading: false,
        data: [],
        error: ""
    },
    recommendedRestaurants: {
        isLoading: true,
        data: [],
        error: ""
    }
}


export default (state = initState, action) => {
    switch (action.type) {

        case ACTION.SET_STATE:
            return {
                ...state,
                ...action.payload
            }

        case ACTION.LOAD_MENU_REQ:
            return {
                ...state,
                menudata: {
                    ...state.menudata,
                    error: "",
                    isLoading: true
                }
            }

        case ACTION.LOAD_MENU_SUCCESS:
            return {
                ...state,
                menudata: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        case ACTION.LOAD_MENU_FAILURE:
            return {
                ...state,
                menudata: {
                    ...state.menudata,
                    isLoading: false,
                    error: action.payload
                }
            }

        case ACTION.LOAD_RECOMMENDED_RESTAURANTS_REQ:
            return {
                ...state,
                recommendedRestaurants: {
                    ...state.recommendedRestaurants,
                    isLoading: true,
                    error: ""
                }
            }

        case ACTION.LOAD_RECOMMENDED_RESTAURANTS_SUCCESS:
            return {
                ...state,
                recommendedRestaurants: {
                    ...state.recommendedRestaurants,
                    isLoading: false,
                    data: action.payload
                }
            }

        case ACTION.LOAD_RECOMMENDED_RESTAURANTS_FAILURE:
            return {
                ...state,
                recommendedRestaurants: {
                    ...state.recommendedRestaurants,
                    isLoading: false,
                    error: payload,
                }
            }

        default:
            return state
    }
}