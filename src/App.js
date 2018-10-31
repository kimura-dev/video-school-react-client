import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import NavBar from './components/header/Navbar';
import CourseList from './components/courses/course-list';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Check for token
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {

  render() {
    return (
      <Provider store={ store } >
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={ Landing } />
            <div className="container main">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
            </div>
            <CourseList />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
