import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store'; 
import './App.css'
import PrivateRoute from './components/common/PrivateRoute';
import NavBar from './components/header/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CourseForm from './components/courses/CourseForm';
import EditCourse from './components/courses/CourseEdit';
import LessonForm from './components/lessons/LessonForm';
import EditLesson from './components/lessons/LessonEdit';
import CourseCatalog from './components/courses/course-catalog/CourseCatalog';
import CourseView from './components/courses/courseView/CourseView';
import LessonView from './components/lessons/LessonView';
import DataManager from './components/api/DataManager';
import SearchResult from './components/searchResult/SearchResult';
import CourseLessonMenu from './components/courses/courseLessons/CourseLessonMenu';


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
            <CourseLessonMenu />
            <div className="menu-pushes-right">
              <NavBar />
              <DataManager />
              <Route exact path="/" component={ Landing } />
              <div className="main">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/demo" component={ Login } />
                <Route exact path="/course-catalog" component={ CourseCatalog } />
                <Route exact path="/search-result" component={ SearchResult } />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={ Dashboard}   />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/course-form" component={ CourseForm }   />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/edit-course/:id" component={ EditCourse }   />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/lesson-form" component={ LessonForm }   />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/edit-lesson/:id" component={ EditLesson }   />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/course/:id" component={ CourseView }   />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/lesson/:id" component={ LessonView }   />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
