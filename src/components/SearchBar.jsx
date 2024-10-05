import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from '../styles/SearchBar.module.css';

const SearchBar = () => {
  const { searchTerm, searchByName } = useContext(ProductContext);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => searchByName(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
