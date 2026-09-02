import { Link } from 'react-router';
import Button from './Button.jsx';
import pic from '../assets/lms.jfif';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-8 bg-gray-100 w-full dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center gap-4 p-8 bg-gray-100 w-full dark:bg-gray-900">
                <h1 className="text-3xl font-bold text-center dark:text-white">Learn Without Limits</h1>
                <p className="text-lg text-center dark:text-gray-300">Build Skills</p>
                <p className="text-md text-center dark:text-gray-300">Build Your Future</p>
                <p className="dark:text-gray-300">Learn from expert instructors</p>
                <Link to="/courses"> 
                    <Button text="Get Started" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button"/>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-8 bg-gray-100 w-full dark:bg-gray-900">
                <img src={pic} alt="Hero Image" className="max-w-md mx-auto"/>
            </div>
        </div>
    );
};


export default Hero;