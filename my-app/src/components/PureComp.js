import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Component Render')
        return (
            <h2>Pure Comp - {this.props.name}</h2>
        )
    }
}

export default  PureComp
