import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    static propTypes ={
        btnText: PropTypes.string.isRequired,
        h1text: PropTypes.string.isRequired,
        newArray: PropTypes.string.isRequired
    };

    static defaultProps ={
        btnText: 'default props test'
    };

    bntOnClick(event) {
        console.log('Button on click', event);
    }

    render() {
        console.log('array', this.props.newArray);
        return(
            <div className="test" style={{backgroundColor: 'red'}} >
                <h1>{ this.props.h1text }</h1>
                <h3>it's really works!!!!</h3>
                <button onClick={this.bntOnClick}>{this.props.btnText}</button>
            </div>

        );
    }
}

ReactDom.render(
    <App /> btnText="click on me!" h1text="this is h1 text" newArray={[1,2,3,4,5]},
document.querySelector('#app')
);