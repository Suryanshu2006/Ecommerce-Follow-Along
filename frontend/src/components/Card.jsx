import React from 'react'
import styles from './card.module.css'

const Card = ({products}) => {
  return (
    <div className={styles.Card}>
        <img className={styles.productImg} src={products.images[0]} alt={products.title} />
        <h3>{products.title}</h3>
        <p>${products.price}</p>

      
    </div>
  )
}

export default Card