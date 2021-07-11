import { baseAxios } from '../index'

export function login ( dispatch, data, history, setErr) {
    baseAxios.post( '/api/v1/auth/login', data)
        .then( async ({data}) => {
            if(data&&data.message === 'Login Success') {
                await localStorage.setItem("token", data.token)
                history.replace("/home")
            }
        })
        .catch(err => {
            setErr(err.response.data.message)
        })
}


export function signup (data, history, setErr) {
    baseAxios.post( '/api/v1/auth/register', data)
    .then( async ({data}) => {
        if(data&&data.message === 'Register Success') {
            await localStorage.setItem("token", data.token)
            history.replace("/home")
        }
    })
    .catch(err => {
        setErr(err.response)
    })
}

export function logout (history) {
    localStorage.removeItem("token")
    history.replace("/login")
}


