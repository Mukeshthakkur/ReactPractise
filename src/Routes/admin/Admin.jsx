import React from 'react';
import SideBar from './sidebar';
import Users from './AdminUsers';
import Posts from './AdminPost';
import { Route } from 'react-router-dom';



const Admin = () => {

    return (<div>
        <h3>Admin DashBoard </h3>
        <SideBar />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/Posts" component={Posts} />
        
    </div>)
}

export default Admin;