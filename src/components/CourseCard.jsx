import { Link } from "react-router";

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <img src={course.image} alt={course.title} className="rounded-md mb-2 w-full h-40 object-cover"/>
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                {course.level}
            </span>
            <h3 className="font-bold">{course.title}</h3>
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