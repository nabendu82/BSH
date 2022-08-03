import React from 'react'

const Hello = () => {
    // return (
    //     <div id="container">
    //         <h1 className="bolder">Hello Nabendu</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'container'},
        React.createElement('h1', {className: 'bolder'}, 'Hello Nabendu')
    )
}

export default Hello