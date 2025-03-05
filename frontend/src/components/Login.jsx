import React from 'react'
import { useState } from 'react'
import "./Login.css"

const Login = () => {
    const[loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    function handleInput(e){
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }
   
   
    function handleLogin(event) {
        event.preventDefault()
        if(loginData.email==""){
            alert("please enter your email...")
            return;
        }
        if(loginData.password==""){
            alert("please enter your password...")
            return;
        }

        alert("you are successfully logged in...")
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
           <label htmlFor="">Email</label>
           <input type = "email" value={loginData.email}name="email" onChange={handleInput} placeholder='Email...'/>
           <label>password</label>
              <input type = "password" value={loginData.password} name="password" onChange={handleInput} placeholder='password...'/>
                <button type="submit">Login</button>

        </form>
    </div>
  )
}

export default Login