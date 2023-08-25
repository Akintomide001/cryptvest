import React from 'react'
import { Icon } from '@iconify/react';
import menuAlt3 from '@iconify/icons-dashicons/menu-alt3';
import { useState } from "react";
import '../styles/header.css'
import '../styles/globals.css'
import '../styles/Home.module.css'
import { Link } from 'react-router-dom';


export default function Mobile() {
    const [IsVisible, setIsVisible] = useState(false)

  return (
    <div>
<div className="close-menu" onClick={() => setIsVisible(current => !current) }>
                <Icon icon={menuAlt3} className="dropdown0" />
            </div>
            {IsVisible &&
                <div className="nav-menu" >
                <div className="dropdown-list">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/Table'}>Connected Account</Link></li>
                    <li><Link to={'/Analytics'}>Analytics</Link></li>
                    <li><Link to={'/Profile'}>Profile</Link></li>
                    <li><Link to={'/Editprofile'}>Edit Profile</Link></li>
                    <li><Link to={'/'}>Log out</Link></li>
                </div>
            </div>}
    </div>
  )
}
