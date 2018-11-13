import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';
import './App.css';
import NavBar from './components/header/Navbar';
import CourseList from './components/courses/CourseList';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CourseForm from './components/courses/CourseForm';
import EditCourse from './components/courses/CourseEdit';
import LessonForm from './components/lessons/LessonForm';
import EditLesson from './components/lessons/LessonEdit';
import CourseCatalog from './components/courses/CourseCatalog';
import PurchasedCourseView from './components/courses/purchasedCourses/PurchasedCourseView';



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
              {/* <Route exact path="/course-catalog" component={ CourseCatalog } /> */}
              {/* Switch allows for the redirect on logout w/out it stays on the page */}
              <Switch>
                <PrivateRoute exact path="/dashboard" component={ Dashboard}   />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/course-form" component={ CourseForm }   />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-course" component={ EditCourse }   />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/lesson-form" component={ LessonForm }   />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-lesson" component={ EditLesson }   />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/purchased-course-view" component={ PurchasedCourseView }   />
              </Switch>
            </div>
            {/* <CourseList /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
