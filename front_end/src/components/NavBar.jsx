import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand m-2" href="#"><img src={logo} style={{height:"10%", width:"10%"}}></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Buy Coffee</a>
            </li>
            <li class="nav-item1">
                <a class="nav-link border border-info" href="#"><Link to="events" className='link-btn'>Join Event</Link></a>
            </li>
            <li class="nav-item1">
                <a class="nav-link border border-info" href="#"><Link to="login" className='link-btn'>Add Event</Link></a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default NavBar;