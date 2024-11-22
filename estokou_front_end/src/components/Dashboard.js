import React from 'react';
import '../css/DashBoard.css';
import UserNavbar from './UserNavbar';
import Table from './TableProdut';

const Dashboad = () => {
    return(
        <div className='DashBoardBody'>
            <UserNavbar></UserNavbar> 
            <Table></Table> 
        </div>
    );
};

export default Dashboad;
