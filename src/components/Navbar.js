import React from 'react'
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.png';
import vector from '../assets/images/vector.png';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <div className="main-logo">
                    <img src={logo} alt={"logo"} />
                    <p>To-Do</p>
                </div>
            </div>
            <div> <p className="tasks">Tasks</p></div>

            <div className="user">
                <p>Leanne Graham</p>
                <img className="user-logo" src={user} alt={"user"} />
                <img className="vector" src={vector} alt={"vector"} />
            </div>
        </div>
    );
}

export default Navbar;