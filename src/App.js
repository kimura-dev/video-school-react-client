import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import NavBar from './components/header/Navbar';
import CourseList from './components/courses/course-list';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';


// Check for token
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token 
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // Loguout User
    store.dispatch(logoutUser());
    // Todo: clear current profile

    // Reidrect to login
    window.location.href = '/login';
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={ store } >
        <Router>
          <div className="App">
          <NavBar />
            {/* <NavBar  {...this.state.auth} logoutUser={() => store.dispatch(logoutUser)} /> */}
            <Route exact path="/" component={ Landing } />
            <div className="container main">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/dashboard" component={ Dashboard}   />
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
