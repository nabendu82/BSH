import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

const PortalDemo = () => {
    return ReactDOM.createPortal(
        <Counter />, document.getElementById('portal-root')
    )
}

export default PortalDemo