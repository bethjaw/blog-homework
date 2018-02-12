import React from 'react';


export default class Login extends React.Component {

  render(){
    // console.log(this.props);
    return(
      <div>
        <p>This is the login page</p>
        <a href="https://github.com/login/oauth/authorize?client_id=087b6fcb054e23141569">
        <button onClick={this.props.handlelogin}>Login with Github</button></a>
      </div>
    )
  }
}
