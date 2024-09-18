'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductoId } from './action';
import '../../globals.css';
import { getNombreMarca } from './action';
import Image from 'next/image';
const Detalle = ({ id }) => {
    const router = useRouter();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [marca, setMarca] = useState('');
    const [showNotification, setShowNotification] = useState(false);

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
        let cart = JSON.parse(sessionStorage.getItem('cart')) || []; 
    
        const existingProductIndex = cart.findIndex(item => item.id === producto.id);
    
        if (existingProductIndex > -1) {
            cart[existingProductIndex].cantidad = 1;
        } else {
            cart.push({ ...producto, cantidad: 1 });
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
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
                    <Image
                        src={`data:image/jpeg;base64,${producto.imagen}`}
                        alt={producto.nombre}
                        width={200}
                        height={300}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                    <p className="text-2xl font-semibold text-black-600">${producto.precio}</p>

                    <div className="flex items-center space-x-4 mt-4">
                        <button 
                            className="custom-yellow-bg text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                            onClick={handleAddToCart}
                        >
                            AÑADIR AL CARRITO
                        </button>
                        {showNotification && (
                            <div className="fixed right-10 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
                                ¡Producto añadido al carrito!
                            </div>
                        )}
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