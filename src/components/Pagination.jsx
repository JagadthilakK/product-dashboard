import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from '../styles/Pagination.module.css';

const Pagination = () => {
  const { currentPage, setCurrentPage, filteredProducts } = useContext(ProductContext);
  const totalPages = Math.ceil(filteredProducts.length / 8);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={styles.pageItem}
          >
            <button 
              className={`${styles.pageLink} ${currentPage === index + 1 ? styles.active : ''}`}
              onClick={() => {
                setCurrentPage(index + 1);
                scrollToTop();
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
