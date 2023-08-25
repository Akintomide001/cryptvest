import React from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/dashboard.css'
import '../styles/profile.css'
import MobileDrop from '../components/MobileDrop';
import { useState } from 'react'
import validator from 'validator';



export default function Editprofile() {
    const [editProfile, setEditProfile] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        country: ""

    })

    const [errors, setErrors] = useState({});
    const handleChange = (name, value) => {
        setEditProfile({
            ...editProfile,
            [name]: value
        })
        if (value !== ""){
            setErrors((prev) => {
                return{
                    ...prev,[name] :null,
                }
            })
        } else {
            setErrors((prev) => {
                return{
                    ...prev,[name] :"this field is required",
                }
            })
        }

    }

    console.log(errors)
    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("profile", JSON.stringify(editProfile));
        // setEditProfile({
        //     first_name: "",
        //     last_name: "",
        //     phone_number: "",
        //     email: "",
        //     country:""
        // })

        if (!validator.isEmail(editProfile.email)){
            setErrors((prev) =>{
                return{
                    ...prev, "email": "invalid email"
                }
            })
        }
        if (!validator.isMobilePhone(editProfile.phone_number)){
            setErrors((prev) =>{
                return{
                    ...prev, "phone_number": "invalid phone number"
                }
            })
        }
    }
    return (
        <div>
            <div className="mobile-con">
                <MobileDrop />
            </div>
            <div className="mobile-account">

                <div className="head-profile">Edit Your Profile</div>
                <div className="edit-profile">
                    <form className="edit-form" onSubmit={handleSubmit}>
                        <div className="profile-name">
                            <div className="name-1">
                                <input className="first-name" placeholder="First name" id="first_name" onChange={(e)=>handleChange("first_name",e.target.value)} ></input>
                            </div>
                            <div className="name-1">
                                <input className="last-name" placeholder="Last name" id="last_name" onChange={(e)=>handleChange("last_name",e.target.value)}></input>
                            </div>
                        </div>
                        <div className="profile-2">
                            <div className="profile-number">
                                <input type="tel" placeholder="Phone number" className="phone-number" id="phone_number" onChange={(e)=>handleChange("phone_number",e.target.value)} ></input>
                                <span style={{color : "red", fontSize: "9px"}}>{errors.phone_number ? errors.phone_number :""}</span>
                            </div>
                            <div className="profile-email">
                                <input placeholder="Email" className="email" id="email" onChange={(e)=>handleChange("email",e.target.value)} ></input>
                                <span style={{color : "red", fontSize: "9px"}}>{errors.email ? errors.email :""}</span>
                            </div>
                        </div>
                        <div className="profile-country">
                            <input placeholder="Country" className="country" id="country" onChange={(e)=>handleChange("country",e.target.value)} ></input>
                        </div>
                        <div className="edit-button">
                            <button type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
