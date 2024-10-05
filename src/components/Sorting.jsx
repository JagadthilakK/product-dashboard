import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from '../styles/Sorting.module.css';

const Sorting = () => {
  const { sortOrder, sortProducts } = useContext(ProductContext);

  return (
    <div className={styles.sortingContainer}>
      <select
        className={styles.sortingSelect}
        value={sortOrder}
        onChange={(e) => sortProducts(e.target.value)}
      >
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
