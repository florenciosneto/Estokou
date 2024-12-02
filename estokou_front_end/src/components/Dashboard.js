import React from 'react';
import '../css/DashBoard.css';
import UserNavbar from './UserNavbar';
import Table from './TableProdut';
import Checker from './Checker';
import Profile from './Profiles';


const Dashboad = () => {

    return(
        
        <div className='DashBoardBody'>
            <Checker/>
            <UserNavbar></UserNavbar> 
            <Table></Table> 
        </div>
    );
};

export default Dashboad;
