'use client';
import React, { useState, useEffect } from 'react';
import ListaPedidos from './listaPedidos';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Pedidos = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("auth_token");

        if (!token) {
            router.push('/empleado/login');
        }
    }, [router]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    return (
        <div className="flex min-h-screen"> 
            <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
                <h2 className="text-xl text-center font-semibold mb-4">Filtros</h2>
                <div>
                    <h2 className="text-l font-semibold mb-4">Buscar por Número de Pedido</h2>
                    <input
                        type="text"
                        placeholder="Buscar por número de pedido"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="border rounded-lg p-2 mb-4 w-full"
                    />
                </div>
            </aside> 
            <main className="flex-1 p-4 flex-grow"> 
                <h1 className="text-2xl font-bold mb-4">Pedidos</h1>
                <ListaPedidos searchTerm={searchTerm} /> 
            </main>
        </div>
    );
};

export default Pedidos;
