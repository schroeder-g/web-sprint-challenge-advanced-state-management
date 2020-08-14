import axios from 'axios'

export const SMURF_LOAD = "SMURF_LOAD"
export const LOAD_SUCCESS = "LOAD_SUCCESS"
export const SMURF_SUBMIT = "SMURF_SUBMIT"

export const initializeSmurfs = () => (dispatch) => {
    dispatch({type: SMURF_LOAD})
    axios.get(`http://localhost:3333/smurfs`)
    .then( res => {
        dispatch({type: LOAD_SUCCESS, payload: res.data })
    })
    .catch( err => console.log(err))
}

export const addSmurf  = (values) => (dispatch ) => {
    dispatch({type: SMURF_LOAD})
    axios.post(`http://localhost:3333/smurfs`, values)
    .then( res => {
        console.log(values)
        dispatch({type: LOAD_SUCCESS, payload: res.data })
    })
}