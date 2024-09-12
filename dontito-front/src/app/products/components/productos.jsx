'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import ListaProductos from "./listaProductos";

const Productos = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda
    const router = useRouter(); // Hook de React Router para navegar

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Actualiza el estado del término de búsqueda
    };

    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
                <h2 className="text-xl text-center font-semibold mb-4">Filtros</h2>
                <div>
                <h2 className="text-l font-semibold mb-4">Buscar por Nombre</h2>
                  <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border rounded-lg p-2 mb-4 w-full"
                  />
                </div>
            </aside> 
            <main className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Productos</h1>
                <ListaProductos searchTerm={searchTerm} />
            </main>
        </div>
    );
};

export default Productos;