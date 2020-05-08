import {url} from "./url-config";
import {deleteData} from "./generalAPI";

export const deleteUser = (login, password) => {
    const deleteUrl = url +`/account/${login}/${password}`

    return deleteData(deleteUrl)
        .then(resp => resp)
        .catch(err => err)
}