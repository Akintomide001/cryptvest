import React from 'react'
import { Icon } from '@iconify/react';
import logo from "../pictures/logo.png"
import arrowRightAlt from '@iconify/icons-dashicons/arrow-right-alt';
import Mobile from '../components/Mobile';

import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/responsiveness.css'
import '../styles/dashboard.css'


export default function MobileDrop() {
  return (
    <div>
        <div className="main-header">
                <div className="sub-header-1">
                    <div className="logo">
                        <img src={logo} alt='/' className="head-logo" />
                    </div>
                </div>
                <div className="sub-header-2">
                    <div className="header-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="contact-us">Contact</a></li>
                        <li><a href="about us">About us</a></li>
                    </div>
                    <div className="head-connect">
                        <a href="dashboard"><span>MY ACCOUNT</span>
                            <Icon icon={arrowRightAlt} className="arrow" />
                        </a>
                    </div>
                    <div className="drop">
                        <Mobile />
                    </div>
                </div>
            </div>
    </div>
  )
}
