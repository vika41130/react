import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Product from './components/Product';

class App extends Component {
  showProductInfo(product) {
    if(product.status) {
      return <div style={{fontSize: '150%'}}>
      <strong>ID</strong>: {product.id}<br />
      <strong>Name: </strong>{product.name} <br />
      <strong>Price: </strong>{product.price} <br />
      <strong>Status: </strong>{product.status ? 'Active' : 'Peding'}
    </div>
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
    var product = {
      id: 1,
      name: 'Iphone 7 Plus',
      price: 123.123,
      status: false
    };
    var users = [
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
    ];
    return (
      <div>
        {/* {this.showProductInfo(product)} */}
        {this.showUsers(users)}
        {/* {
          users.map((value, index) => {
            return <h3 key={index}>
              ID: {value.id} <br />
              Username: {value.username} <br />
              Salary: {value.salary}
            </h3>
          })
        } */}
      </div>
    );
  }
}

export default App;
