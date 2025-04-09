import React from 'react'
import styles from './card.module.css'

const Card = ({products}) => {
 async function handleCart(){
  try {
    
  } catch (error) {
    console.log(error);
    alert("Something went wrong while adding to the cart.")
  }
 }
  return (
    <div className={styles.Card}>
        <img className={styles.productImg} src={products.images[0]} alt={products.title} />
        <h3>{products.title}</h3>
        <p>${products.price}</p>
        <button
        onClick={()=>handleCart(id)}
        >Add to cart</button>

      
    </div>
  )
}

export default Card