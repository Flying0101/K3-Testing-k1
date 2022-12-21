import React from 'react';
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";


import { FaHourglassHalf } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';


import '../css/Nav.css';


function Nav() {

    const location = useLocation();


    function changeColor(curr) {
        if (location.pathname === curr) {
            return 'deepskyblue'
        }
        else {
            return 'white'
        }
    }

    return (
        <div className="Nav-section">

            <div className="nav-list-con">
                <ul className="menu-con">
                    <Link to='/' className="router-link" style={{ color: changeColor('/') }} data-testid="main-page" >
                        <li> <FaTasks className="menu-link" /> </li>
                    </Link>
                    <Link to='/calendar' className="router-link" style={{ color: changeColor('/calendar') }} data-testid="calendar-page">
                        <li> <FaCalendar className="menu-link" /> </li>
                    </Link>
                    <Link to='/timer' className="router-link" style={{ color: changeColor('/timer') }} data-testid="timer-page" >
                        <li> <FaHourglassHalf className="menu-link" /> </li>
                    </Link>
                </ul>
            </div>


        </div>
    );
}

export default Nav;
