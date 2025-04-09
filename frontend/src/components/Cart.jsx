import React from 'react'
import axios from 'axios'
import { useState ,useEffect } from 'react';
import styles from './products.module.css'
import CartCard from './CartCard.jsx';
const Cart = () => {
  const [products,setProducts] = useState([]);

    function getData(){
        axios.get("http://localhost:8000/allproducts")
        .then(response => {
            console.log(data);

            const userData = JSON.parse(localStorage.getItem("follow-along-auth-token-user-name-id"))
            const  newData = data.products.filter((ele)=>{
                return ele.userId == userData.id;
            })
            setProducts(newData);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
      getData();
    },[])

  return (
    <div className={styles.products}>
      {
        products.map(ele => {
          return <MyProductCard product={ele} key={ele.id}/>
        })
      }
    </div>
  )
}

export default MyProducts;