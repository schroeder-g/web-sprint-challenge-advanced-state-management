import React, { useEffect } from 'react'
import { initializeSmurfs } from '../store'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'

import Smurf from './Smurf'

function SmurfContainer(props) {
    useEffect( () => {
        props.initializeSmurfs()
    }, [])
    return (
        <div className="smurf-container">
            { props.smurfs &&
                props.smurfs.map((smurf, index) => (
                    <Smurf smurf={smurf} key={uuid()} />
    ))
            }
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        errors: state.errors,
        loading: state.loading,
        smurfs: state.smurfs
    }
}

export default connect(mapStatetoProps, {initializeSmurfs})(SmurfContainer)