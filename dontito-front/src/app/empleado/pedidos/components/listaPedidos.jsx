'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getPedidoList } from "../actios"; 

const ListaPedidos = ({ searchTerm }) => {
    const [allPedidos, setAllPedidos] = useState([]); 
    const [pedidos, setPedidos] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const router = useRouter();

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                setLoading(true);
                const data = await getPedidoList(); 
                if (Array.isArray(data)) {
                    setAllPedidos(data); 
                    setPedidos(data); 
                } else {
                    console.error("Unexpected data format or no data:", data);
                    setPedidos([]);
                }
            } catch (err) {
                console.error("Error fetching orders:", err);
                setError('Error al obtener los pedidos');
                setPedidos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = allPedidos.filter(pedido =>
                pedido.numero.toString().includes(searchTerm.toString())
            );
            setPedidos(filtered);
        } else {
            setPedidos(allPedidos);
        }
    }, [searchTerm, allPedidos]);

    if (loading) return <p>Cargando pedidos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
            <div className="min-h-screen flex flex-col"> 
                <div className="flex-grow pedido-list"> 
                    {pedidos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {pedidos.map((pedido) => (
                                <div
                                    key={pedido.id} 
                                    className="pedido-card border rounded-lg p-4 transition-colors duration-300 ease-in-out hover:bg-gray-300 hover:text-white"
                                >
                                    <div className="border-b border-gray-300 mb-2 pb-2">
                                        <h2 className="text-xl font-bold">Pedido #{pedido.numero}</h2>
                                        <p className="text-lg font-semibold">Total: ${pedido.total}</p>
                                        <p className="text-sm text-gray-600">Fecha: {new Date(pedido.fechaCreacion).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => router.push(`/empleado/pedidos/${pedido.numero}`)}
                                            className="bg-yellow-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-black"
                                        >
                                            Ver Detalles
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No hay pedidos disponibles</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ListaPedidos;
