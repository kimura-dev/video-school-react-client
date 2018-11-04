import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Submit')
  }


  render() {
    // const { errors } = this.state.errors; 

    return (
      <div className="dashboard">
        Dashboard
    </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  errors: state.errors
  //now we can say this.props.auth
});

export default connect(mapStateToProps)(withRouter(Dashboard));