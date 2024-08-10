import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductContext from '../contexts/ProductContext';

const ProductDetail = () => {
    const { title } = useParams();
    const { products } = useContext(ProductContext);
    const navigate = useNavigate();
    const product = products.find(p => p.title === title);

    if (!product) return <p className="text-center text-gray-700">Data Not Available</p>;

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h2>
                    <p className="text-lg text-gray-600 mb-2">Price: <span className="font-semibold text-gray-800">${product.price}</span></p>
                    <p className="text-lg text-gray-600 mb-2">Popularity: <span className="font-semibold text-gray-800">{product.popularity}</span></p>
                    <p className="text-lg text-gray-600">Description: <span className="font-semibold text-gray-800">{product.description || 'No description available'}</span></p>
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => navigate('/')}
                    className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Back to Main Page
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
