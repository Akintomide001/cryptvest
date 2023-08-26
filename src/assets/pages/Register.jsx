import React from 'react'
import { useState } from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/login_register.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Register() {
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const Navigate = useNavigate();


  async function signup(e) {
    e.preventDefault(e)
    let item = { first_name: firstname, last_name: lastname, email, phone, password };
    let result = await fetch("https://cryptvest-be.vercel.app/api/v1/auth/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"

      }
    })
    result = await result.json()
    localStorage.setItem('user-info', JSON.stringify(result));
Navigate('../Login')

  }

  return (
    <div>
      <div className="login_sign_in">
        <h1 className="t-h1">Register</h1>
        <p>Register an account with us</p>
        <form className="t-form" >
          <input type="text" placeholder="First name" name="first_name" className="t-input"
            value={firstname || ''}
            onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last name" name="last_name" className="t-input"
            value={lastname || ''}
            onChange={(e) => setLastName(e.target.value)} />
          {/* <span className="input-span" style={{ color: "red", fontSize: "9px" }}>{errors.phone ? errors.phone : ""}</span> */}
          <input type="text" placeholder="Phone number" name="phone" className="t-input"
            value={phone || ''}
            onChange={(e) => setPhone(e.target.value)} />

          {/* <span className="input-span" style={{ color: "red", fontSize: "9px" }}>{errors.email ? errors.email : ""}</span> */}
          <input placeholder="email" name="email" className="t-input"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)} />
          {/*  */}
          {/* <span className="input-span" style={{ color: "red", fontSize: "9px" }}>{errors.password ? errors.password : ""}</span> */}
          <input type="text" placeholder="password" name="password" className="t-input"
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)} />
          <button className="t-btn" onClick={signup}><a href='/'></a>Sign Up</button>

          {/* <p className="t-p">This is an error!</p> */}
          <span className="t-span">Do you have an account? <Link to={'../Login'}>Login</Link></span>
        </form>
      </div>
    </div>
  )
}
