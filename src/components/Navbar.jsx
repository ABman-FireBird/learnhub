import { NavLink } from "react-router";
import { useState } from "react";
import Button from './Button.jsx';


const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <nav className="md:flex md:flex-row md:justify-between md:items-center">
            <img src="LearnHub-logo.png" alt="logo"/>
            <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                <li className="hover:bg-gray-600"> 
                    <NavLink to="/" className={({isActive}) => isActive ? 'underline' : ''}>Home</NavLink> 
                </li>

                <li className="hover:bg-gray-600"> 
                    <NavLink className={({isActive}) => isActive ? 'underline' : ''} to="/courses">Courses</NavLink> 
                
                </li>
                
                <li className="hover:bg-gray-600"> 
                    <NavLink className={({isActive}) => isActive ? 'underline' : ''} to="/dashboard">Dashboard</NavLink> 
                </li>
                
                <li className="hover:bg-gray-600"> 
                    <NavLink className={({isActive}) => isActive ? 'underline' : ''} to="/profile">Profile</NavLink> 
                </li>
                <Button text="Login Button" onClick={() => {}} type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
            </ul>
            <Button type="button" text="☰" onClick={toggleMobileMenu} className="md:hidden bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
        </nav>
    );
};  


export default Navbar;