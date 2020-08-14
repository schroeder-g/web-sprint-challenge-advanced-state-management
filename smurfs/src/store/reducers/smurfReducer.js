import { SMURF_LOAD, LOAD_SUCCESS, SMURF_SUBMIT  } from "../index"

const initialState = {
    loading: false,
    error: "",
    smurfs: []
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURF_LOAD : 
            return {
                ...state,
                loading: true
            }
        case LOAD_SUCCESS :
            return {
                ...state,
                loading: false,
                smurfs: action.payload
            }
        // case SMURF_SUBMIT :
        //     return {
        //         ...state,
        //         loading: false,
        //         smurfs: [ ...state.smurfs, action.payload ]
        //     }
        default : 
            return {state}
    }
}