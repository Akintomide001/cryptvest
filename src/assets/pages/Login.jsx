import React from 'react'
import { useState,useEffect,useRef } from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/login_register.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {


  const [user, setUser] = useState('');
const [pwd, setPwd] = useState('');
const [errMsg, setErrMsg] = useState('');
const Navigate = useNavigate();
  
const userRef = useRef();
  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setErrMsg('');
}, [user, pwd])


const handleSubmit = async (e) => {
  e.preventDefault();

  {
    let item = { email: user, password: pwd };
    let result = await fetch("https://cryptvest-be.vercel.app/api/v1/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.getItem(JSON.stringify(result));
    Navigate('/')
  }
}

  return (
    <div>
      <div className="login_sign_in">
        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'></p> */}
        <h1 className="t-h1">Login</h1>
        <form className="t-form" onSubmit={handleSubmit}>

          <input type="text"
            placeholder="Email"
            id="email"
            ref={userRef}
            className="t-input"
            value={user ||''}
            onChange={(e) => setUser(e.target.value)} />

          <input type="password"
            placeholder="password"
            id="password"
            className="t-input"
            value={pwd||''}
            onChange={(e) => setPwd(e.target.value)} />
          <button className="t-btn">Login</button>
          <span className="t-span">Don't you have an account? <a href='./Register'>Register</a></span>
        </form>
      </div>
    </div>
  )
}
