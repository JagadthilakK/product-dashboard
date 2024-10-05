import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import styles from '../styles/ProductList.module.css';

const ProductList = () => {
  const { filteredProducts, currentPage } = useContext(ProductContext);
  const itemsPerPage = 8;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={styles.productListContainer}>
      {currentProducts.map((product) => (
        <div className={styles.productColumn} key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default ProductList;
