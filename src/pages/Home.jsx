import Hero from "../components/Hero";
import Category from '../components/Categories';
import CourseCard from '../components/CourseCard';
import courses from '../data/courses';
import Button from '../components/Button';
import { Link } from 'react-router';

const Home = () => {

    const featuredCourses = courses.slice(0, 3); // Get the first 3 courses as featured courses

    return (

        <div>
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <Category name="Web Development" description="Learn the fundamentals of web development." />
                <Category name="AI/ML" description="Learn the fundamentals of AI and Machine Learning." />
                <Category name="Cloud Computing" description="Learn the fundamentals of cloud computing and cloud integration." />
                <Category name="DSA" description="Learn the fundamentals of data structures and algorithms and mastering problem solving." />
            </div>
           

            <section className="max-w-6xl mx-auto p-8">
                <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">Why Choose Us</h2>
                <p className="text-gray-600 dark:text-gray-300">We offer high-quality courses taught by expert instructors</p>
            </section>

            <section className="max-w-4xl mx-auto p-8 text-center bg-gray-50 dark:bg-gray-800">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">Testimonials</h2>
                <p className="text-gray-600 dark:text-gray-300 italic">I am a satisfied student of learnhub.</p>
            </section>

            <section className="max-w-4xl mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">Ready To Start</h2>
                <p className="text-gray-600 dark:text-gray-300">Sign up for our courses today and start learning!</p>
                <Link to="/courses">
                    <Button text="Explore Courses" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" type="button"/>
                </Link>
            </section>
            
        </div>
    );
};

export default Home;