import React from 'react'

const Villain = ({ villainName }) => {
    if(villainName === 'Batman') throw new Error('Not a Villian')

    return (
        <h1>{villainName}</h1>
    )
}

export default Villain