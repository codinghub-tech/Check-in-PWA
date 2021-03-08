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
        }
    }
}


export const HomeReducer = (state = initState, action) => {
    switch (action.type) {

        case ACTION.SET_STATE:
            return {
                ...state,
                ...action.payload
            }

        case ACTION.LOAD_RESTAURENT_DETAILS:
            return {
                details: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        default:
            return state
    }
}