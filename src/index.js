import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NewComponent from './new';

class App extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>App componrnt</h1>
                <NewComponent text="hellow from app" />
           </div>

        );
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#app')
);