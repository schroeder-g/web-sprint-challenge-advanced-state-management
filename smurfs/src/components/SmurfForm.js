import React, { useState} from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../store'
import { v4 as uuid} from 'uuid'

 const  SmurfForm = (props) => {
    const [ values, setValues ] = useState({
        name: '',
        age: "",
        height: "",
        id: uuid(), 
    })

    const handleChanges = e => {
        e.persist()
        setValues({
            ...values,
            [e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(values)
        setValues('')
    }

    return (
        <div className="smurf-form">
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="name" value={values.name} onChange={handleChanges}/>
                <input name="age" type="text" placeholder="age" value={values.age} onChange={handleChanges}/>
                <input name="height" type="text" placeholder="height" value={values.height} onChange={handleChanges}/>
                <button  type="submit">Add smurf</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(SmurfForm) 