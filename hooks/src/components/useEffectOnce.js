import React, { useEffect } from 'react'

const useEffectOnce = (cb) => {
    useEffect(cb, [])
}

export default useEffectOnce