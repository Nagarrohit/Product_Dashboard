import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://cdn.drcode.ai/interview-materials/products.json')
      .then(response => {
        const productArray = Object.values(response.data.products);
        setProducts(productArray);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-teal-400 p-4 shadow-lg z-20">
        <h1 className="text-4xl font-bold text-center text-white">Product Dashboard</h1>
        
      </header>
      <main className="pt-24"> 
        <div className="w-full max-w-6xl mx-auto p-6">
          <ProductContext.Provider value={{ products, loading, error }}>
            {children}
          </ProductContext.Provider>
        </div>
      </main>
    </div>
  );
};

export default ProductContext;
