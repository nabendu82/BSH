import React, { Component } from 'react'
import MemoComp from './MemoComp';
// import PureComp from './PureComp';
// import RegularComponent from './RegularComponent';

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Nabendu'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Nabendu'
            })
        }, 2000);
    }

    render() {
        console.log('****************');
        console.log('Parent Component Render')
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoComp name={this.state.name} />
                {/* <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
