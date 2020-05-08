// actions

export const FETCH_LOGIN_SUCCESS ='FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAIL = 'FETCH_LOGIN_FAIL';
export const START_FETCHING_LOGIN ='START_FETCHING_LOGIN';
export const STOP_FETCHING_LOGIN ='STOP_FETCHING_LOGIN';

//action creators

    export const fetchLoginSuccess=(payload)=>({type: FETCH_LOGIN_SUCCESS, payload})
    export const fetchLoginFail =(payload)=>({type:FETCH_LOGIN_FAIL, payload})
    export const startFetchingLogin=()=>({type:START_FETCHING_LOGIN})
    export const stopFetchingLogin =()=>({type:STOP_FETCHING_LOGIN})