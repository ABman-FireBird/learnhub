import { Link } from 'react-router';
import Button from './Button.jsx';
import pic from '../assets/lms.jfif';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-8 bg-gray-100 w-full">
            <div className="flex flex-col justify-center items-center gap-4 p-8 bg-gray-100 w-full">
                <h1 className="text-3xl font-bold text-center">Learn Without Limits</h1>
                <p className="text-lg text-center">Build Skills</p>
                <p className="text-md text-center">Build Your Future</p>
                <p>Learn from expert instructors</p>
                <Link to="/courses"> 
                    <Button text="Get Started" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button"/>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-8 bg-gray-100 w-full">
                <img src={pic} alt="Hero Image" className="w-full h-auto" />
            </div>
        </div>
    );
};


export default Hero;