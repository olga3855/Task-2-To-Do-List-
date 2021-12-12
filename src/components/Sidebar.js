import React from 'react';
import sidebar from '../assets/images/sidebar.png';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <img className="sidemenu" src={sidebar} alt={"sidebar"} />
        </div>
    );
}

export default Sidebar;