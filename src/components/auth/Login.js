import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange;
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    } else {
      if(this.props.location.pathname.toLowerCase() === '/demo'){
        this.props.loginUser({username: 'guest', password: '123456'});
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(userData);
  }

  render() {
    return (
      <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center mt-3">Log In</h1>
            <p className="lead text-center">Sign in to your Video School account</p>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup 
                placeholder="Username"
                name='username'
                type="text"
                value={this.state.username}
                onChange={this.onChange}
              />
              <TextFieldGroup 
                placeholder="Password"
                name='password'
                type="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <input id="login-submit-btn" type="submit" className="btn btn-success btn-block mt-4 mb-4 p-2 font-weight-bold" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Login.propTypes = {
  loginUser:  PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);