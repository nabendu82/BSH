import React, { useState } from 'react'
import useUpdate from './useUpdate';

const UpdateComponent = () => {
    const [count, setCount] = useState(10);

    useUpdate(() => alert(count), [count]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default UpdateComponent