import React, { useState, useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

const ProductSearch = ({ setFilteredProducts }) => {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilteredProducts(
      products.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };

  return (
    <div className="mb-4 mt-4 mr-4 ml-0 flex justify-start">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by title"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ProductSearch;
