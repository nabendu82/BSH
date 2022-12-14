import React, { useEffect, useState } from 'react'
import useEffectOnce from './useEffectOnce';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Hook logMousePosition');
        setX(e.clientX)
        setY(e.clientY)
    }

    // useEffect(() => {
    //     console.log('Hook useEffect called');
    //     window.addEventListener('mousemove', logMousePosition);

    //     return () => {
    //         console.log('Hook Unmounting code');
    //         window.removeEventListener('mousemove', logMousePosition)
    //     }
    // }, [])

    useEffectOnce(() => {
        console.log('Hook useEffect called');
        window.addEventListener('mousemove', logMousePosition);
        
        return () => {
            console.log('Hook Unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    })

    return (
        <>
            <h1>Hook X - {x}, Y - {y}</h1>
        </>
    )
}

export default HookMouse