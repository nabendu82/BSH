import React from 'react'
import useToggle from './useToggle'

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle(false);

    return (
        <>
            <h1>{value.toString()}</h1>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </>
    )
}

export default ToggleComponent