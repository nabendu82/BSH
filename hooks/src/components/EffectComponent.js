import React, { useState } from 'react'
import useEffectOnce from './useEffectOnce';

const EffectComponent = () => {
    const [count, setCount] = useState(0);

    useEffectOnce(() => alert('UseEffect Once'))

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default EffectComponent