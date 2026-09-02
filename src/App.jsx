import { Outlet } from "react-router";
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {


  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [profile, setProfile] = useState({
    name: "Abdullah Farooq",
    email: "abdullahfarooq.dev.cs@gmail.com",
    university: "Lahore Garrison University",
    department: "Computer Science",
    semester: "7th",
    bio: "Passionate about web development and always eager to learn new technologies.",
  });
  const [isloaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCourses = localStorage.getItem('enrolledCourses');
    const savedProfile = localStorage.getItem('profile');

    if (savedCourses) setEnrolledCourses(JSON.parse(savedCourses));
    if (savedProfile) setProfile(JSON.parse(savedProfile));

    setIsLoaded(true);

  }, []);

  useEffect(() => {

    if (isloaded){
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
       
  }, [enrolledCourses, isloaded]);


  useEffect(() => {
    if (isloaded){
      localStorage.setItem('profile', JSON.stringify(profile));
    }
    
  }, [profile, isloaded]);


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
        <Outlet context={{enrolledCourses, enrollInCourse, recentActivity, updateProgress, profile, setProfile}}/>
      </main>
      <Footer />
    </div>
  );
}
export default App
