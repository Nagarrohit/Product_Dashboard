import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:title" element={<ProductDetail />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
