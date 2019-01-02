import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './PasswordInfo/PasswordInfo';
import PasswordInfo from './PasswordInfo/PasswordInfo';
import PasswordMask from 'react-password-mask';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
        <PasswordMask
          id="password"
          name="password"
          placeholder="Enter password"
          value={"testing"
          }
        />     
        {this.state.passwords.map( pword => {
          return <PasswordInfo provider={pword.provider} username={pword.username} password={pword.password}/>
        })}
        <PasswordInfo username={this.state.passwords[0].username} password={this.state.passwords[1].password}/>
      </div>
    );
  }
}

export default App;
