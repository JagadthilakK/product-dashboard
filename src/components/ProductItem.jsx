import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={product.image} className={styles.cardImgTop} alt={product.title} />
      </div>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{product.title}</h5>
        <p className={styles.cardPrice}>${product.price}</p>
        <Link to={`/product/${product.id}`} className={styles.btnPrimary}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
