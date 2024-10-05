import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from '../styles/Filter.module.css';

const Filter = () => {
  const { category, filterByCategory } = useContext(ProductContext);

  return (
    <div className={styles.filterContainer}>
      <select
        className={styles.filterSelect}
        value={category}
        onChange={(e) => filterByCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default Filter;
