import React from 'react'

function NewUser({ details }) {
    if(!details) {
        return <h3>Working to fetch your friend&apos;s details...</h3>
    }

    return (
        <div classname ='new-user-container'>
            <h2>{details.fullName}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Occupation: {details.occupation}</p>
            <p>State: {details.state}</p>
        </div>
    )

}

export default NewUser