import React from 'react'

const MemoComp = ({ name }) => {
    console.log('Memo Component')
    return (
        <h3>Memo Comp - {name}</h3>
    )
}

export default React.memo(MemoComp)