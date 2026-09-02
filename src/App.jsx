import { Outlet } from "react-router";
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  const enrollInCourse = (course) => {
      if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)){
        setEnrolledCourses([...enrolledCourses, {...course, progress: 0}]);
        setRecentActivity([...recentActivity, `Enrolled in ${course.title}`]);
      } 
  }
  
  const updateProgress = (courseId, newProgress) => {
    setEnrolledCourses(enrolledCourses.map(course => (
        course.id === courseId ? {...course, progress: newProgress} : course
    )));
  }

  return (
    <div className="app flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet context={{enrolledCourses, enrollInCourse, recentActivity, updateProgress}}/>
      </main>
      <Footer />
    </div>
  );
}
export default App
