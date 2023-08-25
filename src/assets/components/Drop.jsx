import React from 'react'
import { Icon } from '@iconify/react';
import menuAlt3 from '@iconify/icons-dashicons/menu-alt3';
import { useState } from "react";
import '../styles/header.css'
import arrowRightAlt from '@iconify/icons-dashicons/arrow-right-alt';



export default function Drop() {
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
                    <li><a href="Contact Us">Contact</a></li>
                    <li><a href="About Us">About us</a></li>
                </div>
                <div className="drop-connect">
                    <a href="dashboard"><span>MY ACCOUNT</span>
                        <Icon icon={arrowRightAlt} className="arrow" />
                    </a>
                </div>
            </div>}
        </div>
    )
}
