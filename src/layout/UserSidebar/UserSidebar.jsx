import React from 'react';
import { NavLink } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/profile'> Overview</NavLink></li>
            <li><NavLink to='/dashboard/cashIn'> CashIn</NavLink></li>
            <li><NavLink to='/dashboard/cashOut'> CashOut</NavLink></li>
            <li><NavLink to='/dashboard/sendMoney'> Send Money</NavLink></li>

            <li><NavLink to='/dashboard/transactions'> Transactions</NavLink></li>



            <div className="divider"></div>

        </ul>
    );
};

export default UserSidebar;