import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Products from './Products'
import Login from './Login'
import Signup from './Signup'
import AddProduct from './AddProduct'
import MyProducts from './MyProducts'
const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/addproducts' element={<AddProduct />} />
            <Route path='/myproducts' element={<MyProducts />} />
        </Routes>
      
    </div>
  )
}

export default AllRouting