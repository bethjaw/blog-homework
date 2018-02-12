import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom'
import './App.css';
import Main from './components/Main.js';
// import Login from './components/Login.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      main: false,
      login: true
    }
  }

  handleLogin(){
    this.setState({
      main: true,
      login: false,
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src='./public/headerimage.jpg' /> */}
          <h1 className="App-title">Welcome to the Blog</h1>
        </header>

        {/* {this.state.login ? <Login handlelogin={this.handleLogin.bind(this)}/> : null}

        {this.state.main ? <Main /> : null} */}

        <Main />

      </div>
    );
  }
}

export default App;
