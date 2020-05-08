import {FETCH_LOGIN_FAIL, FETCH_LOGIN_SUCCESS, START_FETCHING_LOGIN, STOP_FETCHING_LOGIN} from "./login-actions";

const initState = {
    user: {},
    fetchingLogin: false,
    fetchingLoginError: false
}

export default (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_LOGIN_SUCCESS :
            return {
                ...state,
                user: payload,
                fetchingLogin: false,
                fetchingLoginError: false
            };
        case FETCH_LOGIN_FAIL:
            return {
                ...state,
                fetchingLoginError: true
            };
        case START_FETCHING_LOGIN:
            return {
                ...state,
                fetchingLogin: true,
            };
        case STOP_FETCHING_LOGIN:
            return {
                ...state,
                fetchingLogin: false,
            };

        default:
            return {
                ...state
            }

    }
}