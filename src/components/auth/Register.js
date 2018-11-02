import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup  from '../common/TextFieldGroup';


class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // makes sure a logged in user can not go to the login page
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  // will test for properties
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors})
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    // this.props.history allows you to redirect from an action, this is used with "withRouter"
    this.props.registerUser(newUser, this.props.history);
  }


  render() {
    // const { errors } = this.state.errors;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Video School account</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                  placeholder="First Name"
                  name='firstname'
                  type="text"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Last Name"
                  name='lastname'
                  type="text"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Username"
                  name='username'
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Email Address"
                  name='email'
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Password"
                  name='password'
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Confirm Password"
                  name='password2'
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  errors: state.errors
  //now we can say this.props.auth
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));