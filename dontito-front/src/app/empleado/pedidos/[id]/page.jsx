'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPedidoDetalleList } from '../actios'; 

const PedidoPage = ({ params }) => {
    const { numeroPedido } = params;
    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchDetalles = async () => {
            try {
                setLoading(true);
                const data = await getPedidoDetalleList(numeroPedido);
                if (Array.isArray(data)) {
                    setDetalles(data);
                } else {
                    console.error("Unexpected data format or no data:", data);
                    setDetalles([]);
                }
            } catch (err) {
                console.error("Error fetching order details:", err);
                setError("Error al obtener los detalles del pedido");
                setDetalles([]);
            } finally {
                setLoading(false);
            }
        };

        fetchDetalles();
    }, [numeroPedido]);

    if (loading) return <p>Cargando detalles del pedido...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Detalles del Pedido #{numeroPedido}</h2>
            {detalles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {detalles.map((detalle) => (
                        <div
                            key={detalle.id}
                            className="detalle-card border rounded-lg p-4 transition-colors duration-300 ease-in-out hover:bg-gray-300 hover:text-white"
                        >
                            <h3 className="text-lg font-semibold">{detalle.nombreProducto}</h3>
                            <p>Cantidad: {detalle.cantidad}</p>
                            <p>Subtotal: ${detalle.subTotal}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay detalles para este pedido</p>
            )}
            <button
                onClick={() => router.push('/empleado/pedidos')}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-600"
            >
                Volver a la lista de pedidos
            </button>
        </div>
    );
};

export default PedidoPage;
