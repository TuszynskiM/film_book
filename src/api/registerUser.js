import {url} from "./url-config";
import {postData} from "./generalAPI";

export const registerUser = (value) => {
    const registerUrl = url + `/accounts`;
    const body = {
        login: value.login,
        email: value.email,
        password: value.password
    }

    return postData(registerUrl, body)
        .then(resp => resp)
        .catch(err => err)
}
