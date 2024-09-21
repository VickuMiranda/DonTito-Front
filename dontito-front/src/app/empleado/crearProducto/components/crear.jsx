'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMarcas } from '../../productos/action';

const CrearProductoYModelo = () => {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        codigo: '',
        descripcion: '',
        idModelo: '',
        imagen: null, // Aquí almacenaremos la imagen seleccionada
    });
    const [modelo, setModelo] = useState({
        nombre: '',
        idMarca: '', // Aquí guardaremos la marca seleccionada para el modelo
    });
    const [marcas, setMarcas] = useState([]); // Estado para las marcas
    const [modelos, setModelos] = useState([]); // Estado para los modelos
    const [error, setError] = useState(null);

    // Cargar marcas y modelos cuando el componente se monte
    useEffect(() => {
        const fetchMarcasYModelos = async () => {
            try {
                const [marcasResponse, modelosResponse] = await Promise.all([
                    axios.get('/api/marcas'), // Endpoint para obtener marcas
                    axios.get('/api/modelos') // Endpoint para obtener modelos
                ]);
                setMarcas(marcasResponse.data);
                setModelos(modelosResponse.data);
            } catch (error) {
                console.error('Error al obtener marcas o modelos:', error);
            }
        };

        fetchMarcasYModelos();
    }, []);

    // Manejar cambios en el formulario de producto
    const handleProductoChange = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({ ...prev, [name]: value }));
    };

    // Manejar cambios en el formulario de modelo
    const handleModeloChange = (e) => {
        const { name, value } = e.target;
        setModelo((prev) => ({ ...prev, [name]: value }));
    };

    // Manejar la selección de la imagen
    const handleImageChange = (e) => {
        setProducto((prev) => ({ ...prev, imagen: e.target.files[0] }));
    };

    // Enviar datos para crear un producto
    const handleProductoSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nombre', producto.nombre);
        formData.append('precio', producto.precio);
        formData.append('codigo', producto.codigo);
        formData.append('descripcion', producto.descripcion);
        formData.append('idModelo', producto.idModelo);
        formData.append('imagen', producto.imagen);

        try {
            await axios.post('/api/productos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Producto creado exitosamente');
        } catch (err) {
            setError('Error al crear el producto.');
        }
    };

    // Enviar datos para crear un modelo
    const handleModeloSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/modelos', modelo);
            alert('Modelo creado exitosamente');
        } catch (err) {
            setError('Error al crear el modelo.');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Crear Producto y Modelo</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Formulario para crear producto */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
                    <form onSubmit={handleProductoSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={producto.nombre}
                                onChange={handleProductoChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Precio</label>
                            <input
                                type="number"
                                name="precio"
                                value={producto.precio}
                                onChange={handleProductoChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Código</label>
                            <input
                                type="text"
                                name="codigo"
                                value={producto.codigo}
                                onChange={handleProductoChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Descripción</label>
                            <textarea
                                name="descripcion"
                                value={producto.descripcion}
                                onChange={handleProductoChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Modelo</label>
                            <select
                                name="idModelo"
                                value={producto.idModelo}
                                onChange={handleProductoChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="">Selecciona un modelo</option>
                                {modelos.map((modelo) => (
                                    <option key={modelo.id} value={modelo.id}>
                                        {modelo.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Imagen</label>
                            <input
                                type="file"
                                name="imagen"
                                onChange={handleImageChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                        >
                            Crear Producto
                        </button>
                    </form>
                </div>

                {/* Formulario para crear modelo */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Crear Modelo</h2>
                    <form onSubmit={handleModeloSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Nombre del Modelo</label>
                            <input
                                type="text"
                                name="nombre"
                                value={modelo.nombre}
                                onChange={handleModeloChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Marca</label>
                            <select
                                name="idMarca"
                                value={modelo.idMarca}
                                onChange={handleModeloChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="">Selecciona una marca</option>
                                {marcas.map((marca) => (
                                    <option key={marca.id} value={marca.id}>
                                        {marca.nombreMarca}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                        >
                            Crear Modelo
                        </button>
                    </form>
                </div>
            </div>

            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default CrearProductoYModelo;
