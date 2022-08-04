import React, { Component } from 'react'
import Child from './Child'
import UserContext from './userContext'

class Parent extends Component {
    static contextType = UserContext;

    render() {
        return (
            <>
                <h2>ContextType - {this.context}</h2>
                <Child />
            </>
        )
    }
}

export default Parent
