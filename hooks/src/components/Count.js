import React from 'react'

const Count = ({ text, count}) => {
    console.log(`Rendering ${text}`);

    return (
        <h3>{text} - {count}</h3>
    )
}

export default React.memo(Count)