import React from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Sorting from '../components/Sorting';
import ProductList from '../components/ProductList';
import styles from '../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Simple Product Dashboard</h1> {/* Added heading here */}
      <div className={styles.headerContainer}>
        <SearchBar />
        <Filter />
        <Sorting />
      </div>
      <ProductList />
    </div>
  );
};

export default HomePage;
