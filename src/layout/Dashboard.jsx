import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import UserSidebar from './UserSidebar/UserSidebar';
import { useAuth } from '../AuthProvider/AuthProvider';
import useRole from '../hooks/useRole';
const Dashboard = () => {
    const { currentUser, loading } = useAuth();

    const [role, isLoading] = useRole();

    if (isLoading || loading) {
        return <div className='flex justify-center mt-5'><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></div>
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center p-4  ">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden "><GiHamburgerMenu />
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>



                {
                    currentUser && role.role === 'User' && <UserSidebar></UserSidebar>
                }




            </div>
        </div>
    );
};

export default Dashboard;