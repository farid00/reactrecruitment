import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = '';
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
    	<Row>
    		<Col md={6}>
		      <form name="loginForm" onSubmit={this.onSubmit}>
		      	<FormGroup>
		      		<ControlLabel>Email</ControlLabel>
		      		<FormControl
		            type="text"
		            value={email}
		            placeholder="Enter email"
		            onChange={e => this.setState({email: e.target.value})}
		          />
		        </FormGroup>

		        <FormGroup>
		      		<ControlLabel>Password</ControlLabel>
		      		<FormControl
		            type="text"
		            value={password}
		            placeholder="Enter password"
		            onChange={e => this.setState({password: e.target.value})}
		          />
		        </FormGroup>
		        <Button type="submit">Submit</Button>
		      </form>
		      {isLoginSuccess && <p>success</p>}
          {isLoginPending && <p>Pending</p>}
          {loginError && <p>Error</p>}
			</Col>
      	</Row>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.loginReducer.isLoginPending,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);