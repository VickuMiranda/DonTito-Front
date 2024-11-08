'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { EliminarProducto, getProductoList } from "../action";
import Image from "next/image";

const ListaProductos = ({ searchTerm }) => {
    const [productos, setProductos] = useState([]); 
    const [allProductos, setAllProductos] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);  
    const [hasMore, setHasMore] = useState(true);  

    const router = useRouter();
    const pageSize = 12;  

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                setLoading(true);
                const data = await getProductoList();
                if (Array.isArray(data)) {
                    setAllProductos(data); 
                    setProductos(data.slice(0, pageSize));  
                    setHasMore(data.length > pageSize); 
                } else {
                    console.error("Unexpected data format or no data:", data);
                    setProductos([]);
                }
            } catch (err) {
                console.error("Error fetching products:", err);
                setError('Error al obtener los productos');
                setProductos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = allProductos.filter(producto =>
                producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProductos(filtered);
        } else {
            setProductos(allProductos.slice(0, pageSize));
        }
    }, [searchTerm, allProductos]);

    const loadMoreProducts = () => {
        const nextPage = page + 1;
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;

        setProductos((prevProductos) => [
            ...prevProductos,
            ...allProductos.slice(startIndex, endIndex),
        ]);

        setPage(nextPage);
        setHasMore(endIndex < allProductos.length);
    };

    const handleEditProduct = (id) => {
        router.push(`/empleado/productos/${id}`);
    };

    const handleDeleteProduct = async (id) => {
        try {
            await EliminarProducto(id);
            setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== id));
            alert("Producto eliminado con éxito.");
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert("No se puede eliminar este producto");
        }
    };

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
            <div className="min-h-screen flex flex-col"> 
                <div className="flex-grow producto-list"> 
                    {productos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {productos.map((producto) => (
                                <div
                                    key={producto.id}
                                    className="producto-card border rounded-lg p-4 transition-colors duration-300 ease-in-out hover:bg-gray-300 hover:text-white"
                                >
                                    <Image
                                        width={200}
                                        height={300}
                                        src={`data:image/jpeg;base64,${producto.imagen}`}
                                        alt={producto.nombre}
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                    <div className="border-t border-gray-300 mt-4 pt-4">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-xl font-bold mt-2">{producto.nombre}</h2>
                                            <p className="text-lg font-semibold mt-2">${producto.precio}</p>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <button
                                                onClick={() => handleEditProduct(producto.id)}
                                                className="bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-600"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDeleteProduct(producto.id)}
                                                className="bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-red-600"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No hay productos disponibles</p>
                    )}
                    {hasMore && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={loadMoreProducts}
                                className="text-black bg-transparent text-lg font-semibold border-b-2 border-black pb-1"
                            >
                                Ver más
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ListaProductos;

