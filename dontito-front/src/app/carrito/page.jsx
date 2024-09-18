'use client';
import { useState, useEffect } from 'react';
import { postPedido } from '../lib/api/pedido';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    useEffect(() => {
        const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);


    const calculateTotal = () => {
        return cart.reduce((total, producto) => total + producto.precio * producto.cantidad, 0).toFixed(2);
    };

    const handleQuantityChange = (index, amount) => {
        const updatedCart = [...cart];
        if (updatedCart[index].cantidad + amount > 0) {
            updatedCart[index].cantidad += amount;
        }
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));  
    };

    const handleRemoveProduct = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart)); 
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    };

    const handleCreatePedido = async () => {
        try {
            const response = await postPedido();  
            if (response) {
                alert('Pedido creado con éxito');
                sessionStorage.removeItem('cart');
                setCart([]);
            }
        } catch (error) {
            alert('Hubo un error al crear el pedido. Inténtalo nuevamente.');
        }
    };
    

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">MI CARRITO</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Carrito de Compras</h2>
                    {cart.length > 0 ? (
                        cart.map((producto, index) => (
                            <div key={index} className="relative mb-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 flex items-center">
                                <button
                                    onClick={() => handleRemoveProduct(index)}
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                                >
                                    &times;
                                </button>
                                
                                <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                    <img src={`data:image/jpeg;base64,${producto.imagen}`}
                                    alt={producto.nombre} 
                                    className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-900">{producto.nombre}</h3>
                                    <div className="border-b-2 border-gray-300 mb-2"></div> 
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <p>Modelo: {producto.nombreModelo}</p>
                                        <div className="text-right ml-4">
                                            <p className="text-center font-bold">SubTotal</p>
                                            <p className="text-center font-bold">${(producto.precio * producto.cantidad).toFixed(2)}</p>
                                            <div className="flex items-center justify-center mt-2">
                                                <button 
                                                    className="custom-yellow-bg border rounded-full text-white px-2 py-0.5 text-sm"
                                                    onClick={() => handleQuantityChange(index, -1)}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2 text-sm">{producto.cantidad}</span>
                                                <button 
                                                    className="custom-yellow-bg border rounded-full text-white px-2 py-0.5 text-sm"
                                                    onClick={() => handleQuantityChange(index, 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Tu carrito está vacío.</p>
                    )}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-lg font-bold mb-4 text-gray-800">Resumen de la Compra</h2>
                    <div className="mb-4 text-xl font-semibold text-gray-900">
                        <span className="font-medium">Total:</span> ${calculateTotal()}
                    </div>
                    <div className="mb-4 flex space-x-4"> 
                        <div className="w-1/2">
                            <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-gray-700">Nombre</label>
                            <input
                                id="nombre"
                                type="text" 
                                value={nombre}
                                onChange={handleNombreChange}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="apellido" className="block text-sm font-medium mb-2 text-gray-700">Apellido</label>
                            <input
                                id="apellido"
                                type="text" 
                                value={apellido}
                                onChange={handleApellidoChange}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Apellido"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Correo Electrónico</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Introduce tu email"
                        />
                    </div>
                    <button
                        className="custom-yellow-bg text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300 mt-4"
                        onClick={handleCreatePedido}
                    >
                        Confirmar Compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
