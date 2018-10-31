import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';


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
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" value={this.state.email} onChange={this.onChange} name="email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" value={this.state.password2} onChange={this.onChange} name="password2" />
                </div>
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