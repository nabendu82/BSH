import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log('Regular Component Render')
        return (
            <h2>Regular Component - {this.props.name}</h2>
        )
    }
}

export default RegularComponent
