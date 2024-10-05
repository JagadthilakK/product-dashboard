import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    loadProducts();
  }, []);

  const searchByName = (name) => {
    setSearchTerm(name);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const filterByCategory = (category) => {
    setCategory(category);
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products;
    setFilteredProducts(filtered);
  };

  const sortProducts = (order) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sorted);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        searchByName,
        category,
        filterByCategory,
        sortOrder,
        sortProducts,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
