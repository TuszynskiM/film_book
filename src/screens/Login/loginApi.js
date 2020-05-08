import {fetchLoginFail, fetchLoginSuccess, startFetchingLogin, stopFetchingLogin} from "./login-actions";
import {url} from "../../api/url-config";
import {getDataFromUrl} from "../../api/generalAPI";

export const checkLoginExist = (login, password) => {
    const loginUrl = url + `/account/${login}/${password}`;
    return dispatch =>{
        dispatch(startFetchingLogin())
        getDataFromUrl(loginUrl)
            .then((resp) => dispatch(fetchLoginSuccess(resp.data)))
            .catch(err => dispatch(fetchLoginFail(err)))
            .finally(()=> dispatch(stopFetchingLogin()))
    }
}