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
                <h1 className="text-2xl font-bold">{course.title}</h1>
                <p className="text-lg">{course.description}</p>
                <p className="text-lg">{course.instructor}</p>
                <p className="text-lg">{course.category}</p>
                <p className="text-2xl font-bold">${course.price}</p>
                <p className="text-lg">{course.rating}⭐</p>
                <p className="text-lg">{course.students} students</p>
                <p className="text-lg">{course.level}</p>
                <p className="text-lg">{course.duration}</p>
                <p className="text-lg">{course.learningHours} learning Hours</p>
                <Button text="Enroll Now" onClick={() => enrollInCourse(course)} className="bg-amber-500 text-white hover:bg-amber-600 rounded shadow"/>
            </div>
        </div>
    );
};

export default CourseDetails;