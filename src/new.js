import React, { Component } from 'react';

export default class NewComponent extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{backgroundColor: 'red'}}>
                <h3>New Componrnt</h3>
                <p>{ this.props.text }</p>
            </div>

        );
    }
}
