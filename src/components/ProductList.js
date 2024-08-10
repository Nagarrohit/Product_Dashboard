import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../contexts/ProductContext';
import ProductTable from './ProductTable';
import ProductFilters from './ProductFilters';
import ProductSearch from './ProductSearch';

const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]); // Update filtered products when the product list changes

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
      <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-blue-400 to-teal-400 p-4 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <ProductSearch setFilteredProducts={setFilteredProducts} />
          <ProductFilters products={products} setFilteredProducts={setFilteredProducts} />
        </div>
        <div>
          <ProductTable products={filteredProducts} />
        </div>
      </div>
  );
};

export default ProductList;
