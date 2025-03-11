import React from 'react'
import "./Signup.css"
import {useState} from 'react'
const Signup = () => {
    const[userDetail,setUserDetails]= useState({
        name:"",
        email:"",
        password:""
    })
    function handleInput(event){
        console.log(event.target.value);
        setUserDetails({...userDetail,[event.target.name]:event.target.value})
    }

    async function handleSubmit(){
        if(userDetail.name == ""){
            alert("Please enter your Name");
            return;
        }
        if(userDetail.email == ""){
            alert("Please enter your Email");
            return;
        }
        if(userDetail.password == ""){
            alert("Please enter your Password");
            return;
        }
        try {
            const data = await axios.post("http://localhost:8000/user/signup");
            console.log(data);
            alert("Signup successfull");
        } catch (error) {
            console.log(error)
            alert("Something went wrong");
        }
    }
  return (
    <div className = "regis-box">
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type='text' name = 'name' placeholder='Name...' onChange={handleInput} />
            <label htmlFor="">Email</label>
            <input type='email' name = 'email' placeholder='Email...' onChange={handleInput} />
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder='password...' onChange={handleInput} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup
