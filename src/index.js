import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NewComponent from './new';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            timer: 0
        };
    }
    componentWillMount(){
        setInterval(() => {
            this.setState({ timer: this.state.timer+1 });
        }, 500);
    }
    render() {
        return(
            <div>
                <h1>App componrnt</h1>
                { this.state.timer < 10 ? <NewComponent text="hellow from app" /> : null}
                <p>{ this.state.timer }</p>
           </div>

        );
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#app')
);