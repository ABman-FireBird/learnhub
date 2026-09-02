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
  const [toastMessage, setToastMessage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });


  useEffect(() => {
    const savedCourses = localStorage.getItem('enrolledCourses');
    const savedProfile = localStorage.getItem('profile');
    const savedActivity = localStorage.getItem('recentActivity');

    if (savedCourses) setEnrolledCourses(JSON.parse(savedCourses));
    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedActivity) setRecentActivity(JSON.parse(savedActivity));

    setIsLoaded(true);

  }, []);

  useEffect(() => {

    if (isloaded){
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
       
  }, [enrolledCourses, isloaded]);

  useEffect(() => {
    if (isloaded){
      localStorage.setItem('recentActivity', JSON.stringify(recentActivity));
    }
}, [recentActivity, isloaded]);


  useEffect(() => {
    if (isloaded){
      localStorage.setItem('profile', JSON.stringify(profile));
    }
    
  }, [profile, isloaded]);

  useEffect(() => {
    if (isDarkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const enrollInCourse = (course) => {
      if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)){
        setEnrolledCourses([...enrolledCourses, {...course, progress: 0}]);
        setRecentActivity(prev => [...prev, `Enrolled in ${course.title}`]);      
      } 
  }
  
  const updateProgress = (courseId, newProgress) => {
    setEnrolledCourses(enrolledCourses.map(course => (
        course.id === courseId ? {...course, progress: newProgress} : course
    )));

    const course = enrolledCourses.find(c => c.id === courseId);
    if (course) {
      const message = newProgress >= 100
        ? `Completed "${course.title}"`
        : `Continued "${course.title}" — now ${newProgress}%`;
      setRecentActivity(prev => [...prev, message]);
    }
}

  const showToast = (message) => {
    setToastMessage(message);
  }

  useEffect( () => {
      if (toastMessage){
        const timer = setTimeout(() => {
          setToastMessage(null);
        }, 3000);
        return () => clearTimeout(timer);
      }
  }, [toastMessage]);

  return (
    <div className="app flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main className="flex-grow">
        <Outlet context={{enrolledCourses, enrollInCourse, recentActivity, updateProgress, profile, setProfile, showToast}}/>
      </main>
      <Footer />

      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
export default App
