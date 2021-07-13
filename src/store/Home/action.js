import Swal from 'sweetalert2'
import { baseAxios } from '../index'


export function getTweet(dispatch, query) {
    baseAxios.get( `/api/v1/user?search=${query.search}&sort=${query.sort}`, { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            dispatch({ type: "GET_TWEET", data: response.data.data });
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: `sorry something haven't`,
                text: err.response.data && err.response.data.message ? err.response.data.message : 'internal server error',
              });
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
            console.log(err.response.data.message)
            Swal.fire({
                icon: "Failed",
                title: `Post Tweet Failed`,
                text: err.response.data && err.response.data.message ? err.response.data.message : 'internal server error',
              });
            setErr(err.response.data.message)
        })
}

export function editTweet(dispatch, id, data) {
    baseAxios.put( `/api/v1/user/${id}`, data, { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            Swal.fire({
                icon: "Successs",
                title: `Edit Tweet Successs`,
                text: 'Your tweet updated',
              });
            dispatch({ type: "EDIT_TWEET", data: response.data.data });
        })
        .catch(err => {
            Swal.fire({
                icon: "Failed",
                title: `Update Tweet Failed`,
                text: err.response.data && err.response.data.message ? err.response.data.message : 'internal server error',
              });
           console.log(err)
        })
}

export function deleteTweet(dispatch, id) {
    baseAxios.delete( `/api/v1/user/${id}`, { headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            console.log(response)
            Swal.fire({
                icon: "Successs",
                title: `Delete Tweet Successs`,
                text: 'Your tweet deleted',
              });
            dispatch({ type: "REMOVE_TWEET", data: id });
        })
        .catch(err => {
            Swal.fire({
                icon: "Failed",
                title: `Delete Tweet Failed`,
                text: err.response.data && err.response.data.message ? err.response.data.message : 'internal server error',
              });
           console.log(err)
        })
}

