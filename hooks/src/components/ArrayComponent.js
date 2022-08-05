import React from 'react'
import useArray from './useArray'

const ArrayComponent = () => {
    const { array, set, push, filter, update, remove, clear } = useArray([ 21, 45, 12, 65, 90, 9])

    return (
        <>
            <h1>{array.join(', ')}</h1>
            <button onClick={() => push(7)}>Add</button>
            <button onClick={() => update(1, 9)}>Change</button>
            <button onClick={() => remove(1)}>Remove</button>
            <button onClick={() => filter(n => n < 30)}>Filter</button>
            <button onClick={() => set([1, 45, 67])}>Set</button>
            <button onClick={clear}>Clear</button>
        </>
    )
}

export default ArrayComponent