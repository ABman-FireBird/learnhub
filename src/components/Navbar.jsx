import { NavLink } from "react-router";
import { useState } from "react";
import Button from './Button.jsx';


const Navbar = ( { isDarkMode, setIsDarkMode }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <nav className="md:flex md:flex-row md:justify-between md:items-center bg-white  p-4 gap-4 dark:bg-gray-900 dark:text-white border-b dark:border-gray-700">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">LearnHub</span>
            <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-2 md:gap-4 md:items-center`}>
                <li className="hover:font-bold hover:text-blue-700"> 
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-500' : ''}>Home</NavLink> 
                </li>

                <li className="hover:font-bold hover:text-blue-700"> 
                    <NavLink className={({isActive}) => isActive ? 'text-blue-500' : ''} to="/courses">Courses</NavLink> 
                
                </li>
                
                <li className="hover:font-bold hover:text-blue-700"> 
                    <NavLink className={({isActive}) => isActive ? 'text-blue-500' : ''} to="/dashboard">Dashboard</NavLink> 
                </li>
                
                <li className="hover:font-bold hover:text-blue-700"> 
                    <NavLink className={({isActive}) => isActive ? 'text-blue-500' : ''} to="/profile">Profile</NavLink> 
                </li>
                <Button text="Login Button" onClick={() => {}} type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
                <Button 
                    text={isDarkMode ? "☀️ Light" : "🌙 Dark" }
                    onClick={ () => setIsDarkMode(!isDarkMode)}
                    type="button"
                    className="bg-gray-700 text-white px-4 py-2  rounded"
                />
            </ul>
            <Button type="button" text="☰" onClick={toggleMobileMenu} className="md:hidden bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
        </nav>
    );
};  


export default Navbar;