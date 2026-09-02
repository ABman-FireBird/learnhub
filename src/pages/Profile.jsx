import { useOutletContext } from "react-router";
import Button from "../components/Button";
import { useState } from 'react';


const Profile = () => {
    
    const { profile, setProfile } = useOutletContext();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(profile);
    
    return (
        <div className="flex md:flex-row flex-col gap-8 p-8">

            {isEditing ? (
                <div className="flex flex-col gap-2">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Enter Name"/>
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Enter email"/>
                        
                        <label htmlFor="uni">University</label>
                        <input type="text" id="uni" value={formData.university} onChange={(e) => setFormData({...formData, university: e.target.value})} placeholder="Enter University Name"/>

                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} placeholder="Enter Department name"/>

                        <label htmlFor="semester">Semester</label>
                        <input type="text" id="semester" value={formData.semester} onChange={(e) => setFormData({...formData, semester: e.target.value})} placeholder="Enter Semester"/>

                        <label htmlFor="bio">Enter Bio</label>
                        <textarea id="bio" value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} placeholder="Enter About YourSelf"></textarea>

                        <Button 
                            onClick={() => {
                                if (formData.name.trim() === "" || formData.email.trim() === ""){
                                    alert('Name and email are required fields');
                                    return;
                                }
                                setProfile(formData); 
                                setIsEditing(false)
                            }}
                            text="Save" 
                            type="button" 
                            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
                        />
                        <Button onClick={() => {setFormData(profile); setIsEditing(false)}} text="Cancel" type="button" className="bg-gray-600 text-white px-4 py-2 rounded shadow"/>
                    </form>
                </div>
            ) : (
                <div className="flex flex-col gap-2"> 
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <p className="text-lg">{profile.email}</p>
                    <p className="text-lg">University: {profile.university}</p>
                    <p className="text-lg">Department: {profile.department}</p>
                    <p className="text-lg">Semester: {profile.semester}</p>
                    <p className="text-lg">Bio: {profile.bio}</p>
                    <Button onClick={() => {setIsEditing(!isEditing)}} text="Edit Profile" type="button" className="bg-blue-500 text-white px-4 py-2 rounded"/>
                </div>
            )}
            
        </div>
    );
};

export default Profile;