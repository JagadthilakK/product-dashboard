import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import Swal from 'sweetalert2';
import styles from '../styles/ProductDetailsPage.module.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const products = await fetchProducts();
      const foundProduct = products.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    };
    loadProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Cart",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleBuyNow = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to proceed with the purchase?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, buy it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Purchased!',
          'Your product has been purchased.',
          'success'
        );
      }
    });
  };

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.backButtonContainer}>
        <Link to="/" className={styles.backButton}>
          &larr; Back to Home
        </Link>
      </div>
      
      <div className={styles.productDetailsGrid}>
        <div className={styles.productImageContainer}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <h4 className={styles.productPrice}>${product.price}</h4>
          <p className={styles.productCategory}>Category: {product.category}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowButton} onClick={handleBuyNow}>Buy Now</button>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
