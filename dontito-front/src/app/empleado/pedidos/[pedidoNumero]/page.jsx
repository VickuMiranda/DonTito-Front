'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPedidoDetalleList } from '../actios'; 

const PedidoPage = ({ params }) => {
    const { pedidoNumero } = params ;
    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    console.log(params)

    useEffect(() => {
        const fetchDetalles = async () => {
            try {
                setLoading(true);
                console.log("Número de pedido en fetchDetalles:", pedidoNumero);
                const data = await getPedidoDetalleList(pedidoNumero);
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
    }, [pedidoNumero]);

    if (loading) return <p>Cargando detalles del pedido...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Detalles del Pedido #{pedidoNumero}</h2>
            {detalles.length > 0 ? (
                <ul className="space-y-4">
                    {detalles.map((detalle) => (
                        <li
                            key={detalle.id}
                            className="detalle-card border rounded-lg p-4 transition-colors duration-300 ease-in-out hover:bg-gray-300 hover:text-white"
                        >
                            <h3 className="text-lg font-semibold">{detalle.nombreProducto}</h3>
                            <p>Cantidad: {detalle.cantidad}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay detalles para este pedido</p>
            )}
            <button
                onClick={() => router.push('/empleado/pedidos')}
                className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-black"
            >
                Volver a la lista de pedidos
            </button>
        </div>
    );
};

export default PedidoPage;
