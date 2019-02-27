export default function getCourseRole(user, course) { 
  if(course && user && course.username === user.username) {
    return 'author';
  } else if(course && user && course._id && user.courses && 
            user.courses.find instanceof Function && 
            user.courses.find(c => c && c === course._id || c._id === course._id) ) 
            {
    return 'student';
  }
  return 'guest';
}