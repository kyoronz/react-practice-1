import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.js'
import Content from './components/Form.js'

class App extends Component{
    render() {
        return (
            <Fragment>
            <NavBar/>

            <Content/>
            </Fragment> //need enclosing tag
        )
    }
}

export default App;
