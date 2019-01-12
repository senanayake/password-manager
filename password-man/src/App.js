import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AccountLogin from './Containers/AccountLogin/AccountLogin';
import AccountLoginCard from './Containers/AccountLoginCard/AccountLoginCard';
import PersistentDrawerLeft from './Containers/PersistentDrawerLeft/PersistentDrawerLeft';


class App extends Component {
  state = {
    passwords: [
      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},
      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      {provider: 'gmail', username: 'bob@bobmail.com', password: 'bobpassword' },
      {provider: 'bank', username: 'sally@sallymail.com', password: 'sallypassword'},      
      {provider: 'netflix', username: 'fred@fredmail.com', password: 'fredpassword'}
    ]
  }


  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft />
        {this.state.passwords.map( pword => {
          return <AccountLoginCard provider={pword.provider} username={pword.username} password={pword.password}/>
        })}
      </div>
    );
  }
}

export default App;
