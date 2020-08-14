import React from 'react'

function Smurf(props) {
    const { name, height, age } = props.smurf
    console.log(props.smurf)
    return (
        <div className="smurf">
            <h3>{name}</h3>
            <p>{height}</p>
            <p>{age} Y/o</p>
        </div>
    )
}
export default Smurf