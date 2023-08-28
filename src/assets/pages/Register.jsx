import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/login_register.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HTTPRequest } from '../../../services/HTTP'


export default function Register() {
  // useEffect(()=>{
  //   if(localStorage.getItem('user-info'))
  //   {
  //     Navigate('/')
  //   }
  // }
  // )
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const Navigate = useNavigate();
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(e)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const phone = document.getElementById("phone").value;
    const userData = {email, password, first_name,last_name, phone}
    HTTPRequest.Post(`${HTTPRequest.BASEURL}/auth/register`,userData)
      .then(data => {
        if (data.code == 200) {
          // setError(JSON.stringify(data))
          localStorage.setItem("userData", JSON.stringify(userData,data.userData))
          // localStorage.setItem("token", data.token)
          // localStorage.setItem("userid", data.user_id)
          window.location.href = "./Login";
        } else {
          setError(data.errorMessage)
        }
      })
      .catch(error => {
        setError(error)
      })
  }


  // //   async function signup(e) {
  // //     e.preventDefault(e)
  // //     let item = { first_name: firstname, last_name: lastname, email, phone, password };
  // //     let result = await fetch("https://cryptvest-be.vercel.app/api/v1/auth/register", {
  // //       method: 'POST',
  // //       body: JSON.stringify(item),
  // //       headers: {
  // //         "Content-Type": "application/json",
  // //         "Accept": "application/json"

  // //       }
  // //     })
  // //     result = await result.json()
  // //     localStorage.setItem('user-info', JSON.stringify(result));
  // // Navigate('../Login')

  //   }

  return (
    <div>
      <div className="login_sign_in">
        <h1 className="t-h1">Register</h1>
        <p>Register an account with us</p>
        <form className="t-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First name" id="first_name" className="t-input"
          // {value={firstname || ''}
          //   onChange={(e) => setFirstName(e.target.value)} 
          />

          <input type="text" placeholder="Last name" id="last_name" className="t-input"
          // value={lastname || ''}
          // onChange={(e) => setLastName(e.target.value)} 
          />
          {/* <span className="input-span" style={{ color: "red", fontSize: "9px" }}>{errors.phone ? errors.phone : ""}</span> */}
          <input type="number" placeholder="Phone number" id="phone" className="t-input"
          // value={phone || ''}
          // onChange={(e) => setPhone(e.target.value)}
          />

          {/* <span className="input-span" style={{ color: "red", fontSize: "9px" }}>{errors.email ? errors.email : ""}</span> */}
          <input placeholder="email" id="email" className="t-input"
          // value={email || ''}
          // onChange={(e) => setEmail(e.target.value)}
          />
          {/*  */}
          {/* <span className="input-span" style={{ color: "red", fontSize: "9px" }}>{errors.password ? errors.password : ""}</span> */}
          <input type="text" placeholder="password" id="password" className="t-input"
          // value={password || ''}
          // onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red", fontWeight: "900", textAlign: "center" }}>{error}</p>
          <button className="t-btn"><a href='/'></a>Sign Up</button>

          {/* <p className="t-p">This is an error!</p> */}
          <span className="t-span">Do you have an account? <a href='./Login'>Login</a></span>
        </form>
      </div>
    </div>
  )
}
