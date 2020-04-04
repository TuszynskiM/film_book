import axios from 'axios'

export const getDataFromUrl = (url) =>
    axios.get(url)
        .then(resp => resp)
        .catch(err => alert(err))

