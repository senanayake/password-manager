import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
    card: {
      maxWidth: 1000,
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
  };
  

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

class AccountLoginCard extends React.Component {
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
    //this.state.username = this.props.username;


    console.log('showUsername: ', this.state.showUsername);
    console.log('showPassword: ', this.state.showPassword);

    return (
      <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.provider}
          </Typography>
          <TextField
          id="filled-adornment-username"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          type={this.state.showUsername ? 'text' : 'password'}
          label="Username"
          value={this.state.username}
          onChange={this.handleChange('username')}
          InputProps={{
            startAdornment: (
                <InputAdornment variant="filled" position="start">
                  <IconButton
                    aria-label="Copy"
                  >
                    copy
                  </IconButton>
                </InputAdornment>
              ),
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
            startAdornment: (
                <InputAdornment variant="filled" position="start">
                  <IconButton
                    aria-label="Copy"
                  >
                    copy
                  </IconButton>
                </InputAdornment>
              ),             
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={26}
            className={classes.demo}
            alignItems= 'center'
            direction='row'
          >

        <Grid key='1' item alignItems= 'center' direction='row'>
        <Button size="small" color="primary">
          Delete 
        </Button>
        </Grid>
        <Grid key='2' item            alignItems= 'center' direction='row'>
        <Button size="small" color="primary">
          Edit 
        </Button>
        </Grid>       


            </Grid>
        </Grid>
        </Grid>
      </CardActions>
    </Card>

      </div>
    );
  }
}

AccountLoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountLoginCard);