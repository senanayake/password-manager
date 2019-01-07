import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class AccountLogin extends React.Component {
  state = {
    amount: '',
    password: '',
    username: '',
    weight: '',
    weightRange: '',
    showUsername: false,
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowUsername = () => {
    this.setState(state => ({ showUsername: !state.showUsername }));
    console.log('handle show user name');
  };



  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
    console.log('handle show password');   
  };

  render() {
    const { classes } = this.props;

    console.log('showUsername: ', this.state.showUsername);
    console.log('showPassword: ', this.state.showPassword);

    return (
      <div>
        <TextField
          id="filled-adornment-username"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          type={this.state.showUsername ? 'text' : 'password'}
          label="Username"
          value={this.state.username}
          onChange={this.handleChange('username')}
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  aria-label="Toggle username visibility"
                  onClick={this.handleClickShowUsername}
                >
                  {this.state.showUsername ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />        
        <TextField
          id="filled-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

AccountLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountLogin);