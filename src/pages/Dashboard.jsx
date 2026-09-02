import { useOutletContext } from "react-router";

const Dashboard = () => {

    const { enrolledCourses, enrollInCourse, recentActivity, updateProgress } = useOutletContext();

    const enrolledCount = enrolledCourses.length;

    const completedCount = enrolledCourses.filter(course => course.progress === 100).length;

    const averageCount = enrolledCourses.reduce((total, item) => total + item.progress, 0) / enrolledCount || 0;

    const totalHours = enrolledCourses.length * 5;
    
    return (
        <div className="p-8 flex flex-col gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{enrolledCourses.length}</p>
                    <p className="text-gray-600 dark:text-gray-300">Enrolled Courses</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{completedCount}</p>
                    <p className="text-gray-600 dark:text-gray-300">Completed Courses</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{totalHours}</p>
                    <p className="text-gray-600 dark:text-gray-300">Learning Hours</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{averageCount.toFixed(2)}%</p>
                    <p className="text-gray-600 dark:text-gray-300">Overall Progress</p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">My Courses</h2>
                {enrolledCourses.length === 0 ? (
                    <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {enrolledCourses.map(course => (
                            <div key={course.id} className="border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center">
                                <img src={course.image} alt={course.title} className="w-32 h-20 object-cover rounded"/>
                                <div className="flex-grow">
                                    <h3 className="font-bold">{course.title}</h3>
                                    <p className="text-gray-600 text-sm">{course.instructor}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{course.progress}% complete</p>
                                </div>
                                <button 
                                    onClick={() => updateProgress(course.id, Math.min(course.progress + 20, 100))}
                                    className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
                                >
                                    Continue
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                {recentActivity.length === 0 ? (
                    <p className="text-gray-500">No recent activity.</p>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {recentActivity.map((activity, index) => (
                            <li key={index} className="text-gray-700 bg-gray-50 p-2 rounded">{activity}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;