'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductoId } from './action';
import '../globals.css';
import { getNombreMarca } from './action';

const Detalle = ({ id }) => {
    const router = useRouter();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [marca, setMarca] = useState('');

    useEffect(() => {
        const fetchProductoYMarca = async () => {
            if (id) {
                setLoading(true); // Asegura que el estado de carga sea correcto
                try {
                    const data = await getProductoId(id);
                    setProducto(data)  
                    const nombreMarca = await getNombreMarca(data.nombreModelo);
                    setMarca(nombreMarca.nombreMarca);               
                } catch (err) {
                    setError('Error al obtener los detalles del producto o la marca.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProductoYMarca();
    }, [id]); 

    if (loading) return <p>Cargando detalles...</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return <p>Producto no encontrado.</p>;

    const handleAddToCart = () => {
        console.log(`Añadido al carrito: ${producto.nombre}, Cantidad: ${cantidad}`);
    };


    const handleQuantityChange = (amount) => {
        setCantidad((prevCantidad) => Math.max(1, prevCantidad + amount));
    };

    return (
        <div className="container mx-auto p-6">
            <button
                onClick={() => router.back()}
                className="text-black bg-transparent text-lg font-semibold border-b-2 border-black pb-0.5 mb-2"
            >
                Volver
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <img
                        src={`data:image/jpeg;base64,${producto.imagen}`}
                        alt={producto.nombre}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                    <p className="text-2xl font-semibold text-black-600">${producto.precio}</p>

                    <div className="flex items-center space-x-4 mt-4">
                        <button 
                            className="border rounded-full px-3 py-1"
                            onClick={() => handleQuantityChange(-1)}
                        >
                            -
                        </button>
                        <span className="text-xl">{cantidad}</span>
                        <button 
                            className="border rounded-full px-3 py-1"
                            onClick={() => handleQuantityChange(1)}
                        >
                            +
                        </button>
                        <button 
                            className="custom-yellow-bg text-white py-2 px-4 rounded-full ml-4 hover:bg-yellow-600 transition-colors duration-300"
                            onClick={handleAddToCart}
                        >
                            AÑADIR AL CARRITO
                        </button>
                    </div>
                    <div className="border-t mt-4 pt-4">
                        <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                        <p>{producto.descripcion}</p>
                    </div>

                    <div className="border-t mt-4 pt-4">
                        <p className="text-sm">Modelo: {producto.nombreModelo}</p>
                        <p className="text-sm">Marca: {marca}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detalle;