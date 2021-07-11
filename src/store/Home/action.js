import { baseAxios } from '../index'

export function getTweet(dispatch) {
    baseAxios.get( '/api/v1/user/', { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
           
            dispatch({ type: "GET_TWEET", data: response.data.data });
        })
        .catch(err => {
            console.log(err)
        })
}

export function createTweet(dispatch, data, setErr) {
    baseAxios.post( '/api/v1/user/', data, { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            console.log(response)
            dispatch({ type: "SET_TWEET", data: response.data.data });
        })
        .catch(err => {
            setErr(err.response.data.message)
        })
}

export function editTweet(dispatch, id, data) {
    baseAxios.put( `/api/v1/user/${id}`, data, { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            console.log(response)
            dispatch({ type: "EDIT_TWEET", data: response.data.data });
        })
        .catch(err => {
           console.log(err)
        })
}

export function deleteTweet(dispatch, id) {
    baseAxios.delete( `/api/v1/user/${id}`, { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            console.log(response)
            dispatch({ type: "REMOVE_TWEET", data: response.data.data });
        })
        .catch(err => {
           console.log(err)
        })
}

