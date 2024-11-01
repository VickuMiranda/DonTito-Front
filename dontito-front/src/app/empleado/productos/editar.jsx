'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EditarProducto, getProductoId } from './action';
import '../../globals.css';
import { getNombreMarca } from './action';
import Image from 'next/image';
import { getModeloNombre } from './action';

const Editar = ({ id }) => {
    const router = useRouter();
    const [producto, setProducto] = useState(null);
    const [originalProducto, setOriginalProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [marca, setMarca] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [idModelo, setIdModelo] = useState(''); 

    useEffect(() => {
        const fetchProductoYMarca = async () => {
            if (id) {
                setLoading(true);
                try {
                    const data = await getProductoId(id);
                    setProducto(data);
                    setOriginalProducto(data);
                    const nombreMarca = await getNombreMarca(data.nombreModelo);
                    const modeloData = await getModeloNombre(data.nombreModelo);
                    setIdModelo(modeloData.id); 
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('nombre', producto.nombre || originalProducto.nombre);

        formData.append('precio', producto.precio || originalProducto.precio);

        formData.append('descripcion', producto.descripcion || originalProducto.descripcion);

        try {
            await EditarProducto(producto.id, formData);
            setShowNotification(true);
            setTimeout(() => {
                router.push('/empleado/productos'); 
            }, 1000);
        } catch (error) {
            setError('Error al actualizar el producto');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <button
                onClick={() => router.back()}
                className="text-black bg-transparent text-lg font-semibold border-b-2 border-black pb-0.5 mb-2"
            >
                Volver
            </button>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Image
                        src={`data:image/jpeg;base64,${producto.imagen}`}
                        alt={producto.nombre}
                        width={200}
                        height={300}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                {showNotification && (
                        <div className="fixed right-10 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
                            ¡Producto actualizado!
                        </div>
                    )}

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Editar Producto</h1>

                    <div>
                        <label className="block text-sm font-medium">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={producto.nombre}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Descripción</label>
                        <textarea
                            name="descripcion"
                            type="text"
                            value={producto.descripcion}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Código</label>
                        <input
                            name="codigo"
                            type="text"
                            value={producto.codigo}
                            onChange={handleChange}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium">Modelo</label>
                            <input
                                type="text"
                                name="nombreModelo"
                                value={producto.nombreModelo}
                                readOnly
                                className="mt-1 block w-full p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
                            />
                    </div>
                        
                    <div className="w-1/2">
                        <label className="block text-sm font-medium">Marca</label>
                        <input
                            type="text"
                            name="marca"
                            value={marca}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                </div>
                    <button
                        type="submit"
                        className="custom-yellow-bg text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                    >
                        Actualizar Producto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Editar;
