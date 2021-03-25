import ACTION from "../actions/actionTypes"

const initState = {
    menudata: {
        isLoading: false,
        data: [],
        error: ""
    },
    promos: {
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
        case ACTION.GET_PROMOS_REQ:
            return {
                ...state,
                promos: {
                    ...state.promos,
                    isLoading: true,
                    error: ""
                }
            }

        case ACTION.GET_PROMOS_SUCCESS:
            return {
                ...state,
                promos: {
                    data: action.payload,
                    isLoading: false,
                    error: "",
                }
            }
        case ACTION.GET_PROMOS_FAILURE:
            return {
                ...state,
                promos: {
                    ...state.promos,
                    isLoading: false,
                    error: action.payload,
                }
            }


        default:
            return state
    }
}