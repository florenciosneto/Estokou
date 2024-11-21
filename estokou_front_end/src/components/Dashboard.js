import React from 'react';
// import '../css/Dashboad.css';
import UserNavbar from './UserNavbar';
import Table from './TableProdut';

const Dashboad = () => {
    return(
        <div className='DashboadBody'>
            <UserNavbar></UserNavbar> 
            <Table></Table> 
        </div>
    );
};

export default Dashboad;
