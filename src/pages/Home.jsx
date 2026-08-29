import Hero from "../components/Hero";
import Category from '../components/Categories';


const Home = () => {
    return (

        <div>
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <Category name="Web Development" description="Learn the fundamentals of web development." />
            <Category name="AI/ML" description="Learn the fundamentals of AI and Machine Learning." />
            <Category name="Cloud Computing" description="Learn the fundamentals of cloud computing and cloud integration." />
            <Category name="DSA" description="Learn the fundamentals of data structures and algorithms and mastering problem solving." />
            </div>
            <h2>Testimonials</h2>
            <p>I am a satisfied customer of LearnHub!</p>
            <h2>Why Choose Us</h2>
            <p>We offer high-quality courses taught by expert instructors.</p>
            <h2>CTA</h2>
            <p>Sign up for our courses today and start learning!</p>
            <h3>Featured Courses</h3>
            <p>DSA, WEB</p>
        </div>
    );
};

export default Home;