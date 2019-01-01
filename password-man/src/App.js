import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './PasswordInfo/PasswordInfo';
import PasswordInfo from './PasswordInfo/PasswordInfo';

class App extends Component {
  state = {
    passwords: [
      {username: 'bob@bobmail.com', password: 'bobpassword' },
      {username: 'sally@sallymail.com', password: 'sallypassword'},
      {username: 'fred@fredmail.com', password: 'fredpassword'}
    ]
  }


  render() {
    return (
      <div className="App">
        <PasswordInfo username={this.state.passwords[0].username} password={this.state.passwords[0].password}/>
      </div>
    );
  }
}

export default App;
