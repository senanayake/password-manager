import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AccountLogin from './Containers/AccountLogin/AccountLogin';


class App extends Component {
  state = {
    passwords: [
      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},
      {provider: 'netflix', username: 'fred@fredmail.com', password: 'fredpassword'}
    ]
  }


  render() {
    return (
      <div className="App">

        <AccountLogin />
      </div>
    );
  }
}

export default App;
