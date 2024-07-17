import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);
    //   const history = useHistory(); // Initialize useHistory
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login"); // Redirect to homepage after logout
    };
    return (
        <div>
            <h1>Profile</h1>
            {currentUser ? (
                <>
                    <p>Name: {currentUser.name}</p>
                    <p>Email: {currentUser.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;