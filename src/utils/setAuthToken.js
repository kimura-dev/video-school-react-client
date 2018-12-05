// Using axios prevents you from manually having to put a token in for each request 
import axios from 'axios';

// Boolean value returned
const setAuthToken = token => {
  if(token) {
    localStorage.setItem('jwtToken', token)
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
  } else {
    localStorage.removeItem('jwtToken')
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;