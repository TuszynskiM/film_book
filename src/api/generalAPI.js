import axios from 'axios'

export const getDataFromUrl = (url) =>
    axios.get(url)
        .then(resp => resp)
        .catch(err => err)

export const postData =(url, body)=>
    axios.post(url,body)
        .then((resp)=> resp.data)
        .catch((err)=>err)

export const deleteData = (url)=>
    axios.delete(url, )
        .then((resp)=>resp.data)
        .catch((err)=>err)

export const updateData = (url, newPassword)=>
    axios.put(url, {password: newPassword})
        .then((resp)=>resp.data)
        .catch((err)=> err)
