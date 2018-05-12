import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 0,
          username: 'user1',
          salary: 500
        },
        {
          id: 1,
          username: 'user2',
          salary: 800
        },
        {
          id: 2,
          username: 'user3',
          salary: 1200
        }
      ]
    }
  }

  showUsers(users) {
    var element = users.map((value, index) => {
      return <h3 key={value.id}>
      ID: {value.id} <br />
      Username: {value.username} <br />
      Username: {value.salary}
      </h3>
    });
    return element;
  }

  render() {
    return (
      <div>
        {this.showUsers(this.state.users)}
      </div>
    );
  }
}

export default App;
