import React from 'react'
import styles from './card.module.css'
import axios from 'axios'
const MyProductCard = ({products}) => {

  async function handleDelete(){
    try {
      await axios.delete(`http://localhost:8080/product/delete/${id}`,{
        headers:{
          Authorization: token.token
        }
      })
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  }
  return (
    <div className={styles.Card}>
        <img className={styles.productImg} src={products.images[0]} alt={products.title} />
        <h3>{products.title}</h3>
        <p>${products.price}</p>
        <div
        style={{
          display:"flex",
          justifyContent:"space-around",
          padding:"0.5rem",
        }}
        >
            <button className="btn-del-edt" style={{
              backgroundColor:"gray",
              border:"1px solid",
              borderRadius:"0.3rem",
              width:"3rem",
              display:"flex",
              justifyContent:"space-around",
              margin:"auto"
            }}>Edit</button>
            <button className="btn-del-edt" style={{
              backgroundColor:"gray",
              border:"1px solid",
              borderRadius:"0.3rem",
              width:"3rem",
              display:"flex",
              justifyContent:"space-around",
              margin:"auto"
            }}
            onClick={()=>handleDelete(products._id)}
            >Delete</button>
        </div>

      
    </div>
  )
}

export default MyProductCard;