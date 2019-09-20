import React, { Component } from 'react';

export default class NewComponent extends Component{

    constructor(props) {
        super(props);
        console.log("Constructor");
    }
    componentWillMount() {
        console.log("ComponentWillMount");
    }
    componentDidMount() {
        console.log("ComponentDidMount");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return(
            <div style={{backgroundColor: 'red'}}>
                <h3>New Componrnt</h3>
                <p>{ this.props.text }</p>
            </div>

        );
    }
}
