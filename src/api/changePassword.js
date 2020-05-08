import {url} from "./url-config";
import {updateData} from "./generalAPI";

export const changePassword =(userId, newPassword)=>{
    const changeUrl= `${url}/account/${JSON.parse(userId)}`
console.log(changeUrl)
    return updateData(changeUrl, newPassword)
        .then(resp=>resp)
        .catch(err=>err)
}
