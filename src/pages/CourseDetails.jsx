import { useParams } from 'react-router';
import courses from '../data/courses';
import Button from '../components/Button';
import { useOutletContext } from 'react-router';


const CourseDetails = () => {
    
    const { id } = useParams();
    
    const { enrolledCourses, enrollInCourse } = useOutletContext(); 

    console.log(enrolledCourses);

    const course = courses.find(course => course.id === id);

    if (!course) {
        return <h1>Course Not Found.</h1>
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8">
            <img src={course.image} alt={course.title} className="w-full md:w-1/2 rounded-lg object-cover md:max-h-96"/>

                <div className="flex flex-col gap-2">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <p>{course.instructor}</p>
                <p>{course.category}</p>
                <p>${course.price}</p>
                <p>{course.rating}⭐</p>
                <p>{course.students} students</p>
                <p>{course.level}</p>
                <p>{course.duration}</p>
                <p>{course.learningHours} learning Hours</p>
                <Button text="Enroll Now" onClick={() => enrollInCourse(course)} className="bg-amber-500 text-white hover:bg-amber-600"/>
            </div>
        </div>
    );
};

export default CourseDetails;