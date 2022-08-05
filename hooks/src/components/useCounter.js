import { useState } from 'react'

const useCounter = (intialCount = 0) => {
    const [count, setCount] = useState(intialCount)
    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    const decrement = () => {
        setCount(prevState => prevState - 1)
    }

    const reset = () => {
        setCount(intialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter