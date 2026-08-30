import { Link } from 'react-router';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.rating} ⭐</p>
            <p>${course.price}</p>
            <p>{course.duration}</p>
            <Link to={`/courses/${course.id}`} className="text-purple-500 hover:text-purple-700">
                View Details
            </Link>
        </div>
    );
};

export default CourseCard;