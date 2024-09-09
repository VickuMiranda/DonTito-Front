'use client';
import ListaProductos from "./listaProductos";


const Filtro = () => {
    return (
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Filtros</h2>
          <div>
          </div>
        </aside>
        
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Productos</h1>

          <ListaProductos />

        </main>
      </div>
    );
  };
  
  export default Filtro;
  