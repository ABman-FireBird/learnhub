import courses from '../data/courses';
import CourseCard from '../components/CourseCard';
import { useState } from 'react';

const Courses = () => {
    
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    
    const filteredCourses = courses.filter(course => {
        const matchesCategory = category === "" || course.category === category;
        const matchesDifficulty = difficulty === "" || course.level === difficulty;
        const matchesText = text === "" || course.title.toLowerCase().includes(text.toLowerCase());
        return matchesCategory && matchesDifficulty && matchesText;
    });

    return (
        <div>
            
            <div className="flex flex-wrap gap-4 p-4">
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Search Courses...." className="border border-gray-300 rounded-md p-2"/>
                
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-300 rounded-md p-2">
                    <option value="">All Categories</option>
                    <option value="Web Development">Web Development</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="DSA">DSA</option>
                </select>

                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="border border-gray-300 rounded-md p-2">
                    <option value="">All Difficulties</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} /> 
                ))}
            </div>
        </div>
    );
};

export default Courses;