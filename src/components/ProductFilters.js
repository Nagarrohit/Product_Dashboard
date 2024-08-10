 import React, { useState } from 'react';

const priceRanges = ['0-5000', '5000-10000', '10000-20000', '20000+'];
const popularityRanges = ['0-10000', '10000-30000', '30000-50000', '50000+'];

const ProductFilters = ({ products = [], setFilteredProducts }) => {
  const [priceRange, setPriceRange] = useState('');
  const [popularityRange, setPopularityRange] = useState('');

  const filterProducts = () => {
    let filtered = products;

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = Number(product.price);
        return max ? price >= min && price <= max : price >= min;
      });
    }

    if (popularityRange) {
      const [min, max] = popularityRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const popularity = Number(product.popularity);
        return max ? popularity >= min && popularity <= max : popularity >= min;
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <select
        onChange={(e) => setPriceRange(e.target.value)}
        value={priceRange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Price Range</option>
        {priceRanges.map(range => (
          <option key={range} value={range}>{range}</option>
        ))}
      </select>
      <select
        onChange={(e) => setPopularityRange(e.target.value)}
        value={popularityRange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Popularity Range</option>
        {popularityRanges.map(range => (
          <option key={range} value={range}>{range}</option>
        ))}
      </select>
      <button
        onClick={filterProducts}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilters;