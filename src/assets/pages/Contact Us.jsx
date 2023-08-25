import React from 'react'
import { Icon } from '@iconify/react'
import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/home.css'
import '../styles/footer.css'
import '../styles/responsiveness.css'

import phoneIcon from '@iconify/icons-gg/phone';
import emailSolid from '@iconify/icons-clarity/email-solid';
import whatsappIcon from '@iconify/icons-logos/whatsapp-icon';
import facebookIcon from '@iconify/icons-logos/facebook';
import twitterIcon from '@iconify/icons-logos/twitter';
import instagramIcon from '@iconify/icons-skill-icons/instagram';



export default function ContactUs() {
    return (
        <div>
            <Header />
            <div className="contact">
                <div className="contact-1">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-2">
                    <div className="contact-form">
                        <h3>Contact form</h3>
                        <form className="c-form">
                            <input placeholder="Name" />
                            <input placeholder="Email" />
                            <textarea />
                            <button type="submit">Send message</button>
                        </form>
                    </div>
                </div>
                <div className="contact-3">
                    <div className="contact-3a">
                        <div className="contact-number">
                            <Icon icon={phoneIcon} fontSize={50} />
                            <h2 style={{ color: "#006cff" }}>Phone number</h2>
                            <p>09027354653</p>
                        </div>
                        <div className="contact-number">
                            <Icon icon={emailSolid} fontSize={50} />
                            <h2 style={{ color: "#006cff" }}>Email</h2>
                            <p>wwwww@gmail.com</p>
                        </div>
                        <div className="contact-number" id="social">
                            <div className="i-con">
                                <Icon icon={whatsappIcon} fontSize={30} />
                            </div>
                            <div className="i-con">
                                <Icon icon={facebookIcon} fontSize={30} />
                            </div>
                            <div className="i-con">
                                <Icon icon={twitterIcon} fontSize={30} />
                            </div>
                            <div className="i-con">
                                <Icon icon={instagramIcon} fontSize={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
