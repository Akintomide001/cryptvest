import React from 'react'
import { Icon } from '@iconify/react';
import menuAlt3 from '@iconify/icons-dashicons/menu-alt3';
import { useState } from "react";
import '../styles/header.css'
import '../styles/globals.css'
import '../styles/Home.module.css'


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
                    <li><a href="/">Home</a></li>
                    <li><a href="/Dashboard">Dashboard</a></li>
                    <li><a href="/Table">Connected Account</a></li>
                    <li><a href="/Analytics">Analytics</a></li>
                    <li><a href="Profile">Profile</a></li>
                    <li><a href="/Editprofile">Edit Profile</a></li>
                    <li><a href="/">Log Out</a></li>
                </div>
            </div>}
    </div>
  )
}