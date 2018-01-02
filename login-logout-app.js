import React, { Component } from 'react';
import './App.css';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
}

class Greeting extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  }
  render(){
    if (this.state.isLoggedIn) {
      return(<UserGreeting />);
    }
    return (<GuestGreeting />);
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    let greeting = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      greeting = <UserGreeting />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      greeting = <GuestGreeting />;
    }

    return (
      <div>
        {greeting}
        {button}
      </div>
    );
  }
}

export default LoginControl;
