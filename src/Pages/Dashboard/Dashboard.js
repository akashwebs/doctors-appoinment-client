import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
  const [user]=useAuthState(auth);
  const [admin]=useAdmin(user);
  
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h1 className='text-3xl text-red-400'>Welcome to Dashboard</h1>
            <Outlet></Outlet>
          {/* <!-- Page content here --> */}
        
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/dashboard/myreview'}>My Review</Link></li>
            <li><Link to={'/dashboard/history'}>My Review</Link></li>
            { admin && <>
              <li><Link to={'/dashboard/users'}>My Users</Link></li>
              <li><Link to={'/dashboard/addDoctor'}>Add a Doctor</Link></li>
              <li><Link to={'/dashboard/managedoctor'}>Manage Doctor</Link></li>
            </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;