import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/dashboard.css'
import '../styles/profile.css'
import MobileDrop from '../components/MobileDrop';


export default function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const isUser = localStorage.getItem("userid");
        if(isUser === null){
          window.location.href = "/";
            
        }else{
          setUser(JSON.parse(localStorage.getItem("userData")))
          const userData = localStorage.getItem("userData");
        }},[])    

  return (
    <div>
        <div className="mobile-con">
                <MobileDrop />
            </div>
         <div className="mobile-account">
                <div className="head-profile">Your Profile</div>
                <div className="profile">
                    <div className="profile-1">
                        <div className="profile-name">
                            <div className="name-1">
                            <input className="first-name" placeholder="First name">{user !== null ? user.first_name : ""}</input>
                            </div>
                            <div className="name-1">
                                <input className="last-name" placeholder="Last name">{user !== null ? user.last_name : ""}</input>
                            </div>
                        </div>
                        <div className="profile-2">
                            <div className="profile-number">
                                <input placeholder="Phone number" className="phone-number">{user !== null ? user.phone : ""}</input>
                            </div>
                            <div className="profile-email">
                                <input placeholder="Email" className="email">{user !== null ? user.email : ""}</input>
                            </div>
                        </div>
                        <div className="profile-country">
                            <input placeholder="Country" className="country">Nigeria</input>
                        </div>
                    </div>
                </div>
            </div>
 
    </div>
  )
}
