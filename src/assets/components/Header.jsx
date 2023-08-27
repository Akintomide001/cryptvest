import React from 'react'
import '../styles/header.css'
import logo from "../pictures/logo.png"
import { Icon } from '@iconify/react';
import arrowRightAlt from '@iconify/icons-dashicons/arrow-right-alt';
import Drop from '../components/Drop'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div>
                <div className="main-header">
                    <div className="sub-header-1">
                        <div className="logo">
                            <img src={logo} alt='/' className="head-logo" />
                        </div>
                    </div>
                    <div className='link-header'>
                        <div className="sub-header-2">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/Contact Us'>Contact</a></li>
                            <li><a href='/About Us'>About us</a></li>

                        </div>
                        {
                            localStorage.getItem('user-info') ?
                                <div className="head-connect">
                                    <a href='/Dashboard'><span>MY ACCOUNT</span>
                                        <Icon icon={arrowRightAlt} className="arrow" /></a>

                                </div>
                                :
                                <div className="head-connect">
                                    <a href='/Login'><span>LOGIN</span>
                                        <Icon icon={arrowRightAlt} className="arrow" /></a>
                                </div>

                        }
                        <div className="drop">
                            <Drop />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
