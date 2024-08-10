import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductTable = ({ products = [] }) => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 20;
    const navigate = useNavigate();
    if (!Array.isArray(products)) {
        return <p>Loading products...</p>;
    }

    const handleChangePage = (direction) => {
        if (direction === 'next' && (page + 1) * rowsPerPage < products.length) {
            setPage(prevPage => prevPage + 1);
        } else if (direction === 'prev' && page > 0) {
            setPage(prevPage => prevPage - 1);
        }
    };
    const currentProducts = products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const handleRowClick = (title) => {
        console.log(title,"title");
        navigate(`/product/${title}`);
    };

    return (
        <div className="relative min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-16">
                <div className="overflow-x-auto">
                    <div className="relative max-h-[calc(100vh-6rem)] overflow-y-auto">
                        <Table className="min-w-full divide-y divide-gray-200">
                            <TableHead className="bg-gradient-to-r from-blue-500 to-green-500 sticky top-0 z-10">
                                <TableRow>
                                    <TableCell className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Title</TableCell>
                                    <TableCell className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Price</TableCell>
                                    <TableCell className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Popularity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentProducts.map((product) => (
                                    <TableRow
                                        key={product.title}
                                        className="bg-white hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleRowClick(product.title)}
                                    >
                                        <TableCell className="px-3 py-4 text-sm font-medium text-gray-900">{product.title}</TableCell>
                                        <TableCell className="px-3 py-4 text-sm text-gray-500">{product.price}</TableCell>
                                        <TableCell className="px-3 py-4 text-sm text-gray-500">{product.popularity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center">
                <Button
                    onClick={() => handleChangePage('prev')}
                    disabled={page === 0}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Previous Page
                </Button>
                <Button
                    onClick={() => handleChangePage('next')}
                    disabled={(page + 1) * rowsPerPage >= products.length}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Next Page
                </Button>
            </div>
        </div>
    );
};

export default ProductTable;
