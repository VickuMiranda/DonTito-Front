'use client';
import React, { useState, useEffect } from "react";
import { getProductoList } from "../action";
import Detalle from "../detalle";
import Image from "next/image";

const ListaProductos = () => {
    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const data = await getProductoList();
                if (Array.isArray(data)) {
                    setProducto(data);
                    console.log(data);
                } else {
                    console.error("Unexpected data format or no data:", data);
                    setProducto([]);
                }
            } catch (err) {
                console.error("Error fetching products:", err);
                setError('Error al obtener los productos');
                setProducto([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, []);



    const handleProductClick = (producto) => {
        setSelectedProduct(producto);
    };

    const handleCloseDetalle = () => {
        setSelectedProduct(null);
    };

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;



    //EN LA CONSOLA LA MUESTRA, FIJARSE COMO HACERLA VER 
    return (
        <div className="producto-list">
            {productos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {productos.map((producto) => (
                        <div key={producto.id} 
                        className="producto-card border rounded-lg p-4 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-300 hover:text-white"
                        onClick={() => handleProductClick(producto)}
                        >
                            <img
                                width={200}
                                height={300}
                    
                                src={`data:image/jpeg;base64,${producto.imagen}`}
                                alt={producto.nombre}
                                className="w-full h-48 object-cover rounded-md"
                            /> 
                            <div className="border-t border-gray-300 mt-4 pt-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold mt-2">{producto.nombre}</h2>
                                    <p className="text-lg font-semibold  mt-2">${producto.precio}</p>
                                </div>
                            </div>    
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos disponibles</p>
            )}

            <Detalle producto={selectedProduct} onClose={handleCloseDetalle} />
            
        </div>
    );
};

export default ListaProductos;
