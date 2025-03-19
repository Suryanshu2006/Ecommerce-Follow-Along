import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
        <div onClick={()=>{
            navigate('/')
        }}>
            <h1>Home</h1>
        </div>
        <div>
            <p onClick={()=>{navigate("/addproducts")}}>Add Products</p>
        </div>
        <div>
            <div onClick={()=>{
                navigate('/Login')
            }}>Login</div>
            <div onClick={()=>{
                navigate('/Signup')
            }}>Signup</div>
        </div>
      
    </div>
  )
}

export default NavBar