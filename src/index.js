import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{

    bntOnClick(event) {
        console.log('Button on click', event);
    }

    render() {
        return(
            <div className="test" style={{backgroundColor: 'red'}} >
                <h1>App works!</h1>
                <h3>it's really works!!!!</h3>
                <button onClick={this.bntOnClick}>{this.props.children}</button>
            </div>

        );
    }

}

ReactDom.render(
    <App> test props</App>,
    document.querySelector('#app')
);