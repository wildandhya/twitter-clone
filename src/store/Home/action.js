import { baseAxios } from '../index'

export function getTweet(dispatch) {
    baseAxios.get( '/api/v1/user/')
        .then((response) => {
            console.log(response)
            dispatch({ type: "GET_PROVINSI", data: response.data.data });
        })
        .catch(err => {
            console.log(err)
        })
}

