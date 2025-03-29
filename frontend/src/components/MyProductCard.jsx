import React from 'react'
import styles from './card.module.css'

const MyProductCard = ({products}) => {
  return (
    <div className={styles.Card}>
        <img className={styles.productImg} src={products.images[0]} alt={products.title} />
        <h3>{products.title}</h3>
        <p>${products.price}</p>
        <div>
            <button className="btn-del-edt">Edit</button>
            <button className="btn-del-edt">Delete</button>
        </div>

      
    </div>
  )
}

export default MyProductCard;