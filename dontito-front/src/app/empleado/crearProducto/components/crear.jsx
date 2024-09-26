// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getMarcas, crearModelo } from '../../productos/action';

// const Crear = () => {
//     const [producto, setProducto] = useState({
//         nombre: '',
//         precio: '',
//         codigo: '',
//         descripcion: '',
//         nombreModelo: '',
//         idMarca: '', 
//         imagen: null,
//     });
//     const [marcas, setMarcas] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchMarcas = async () => {
//             try {
//                 const nombreMarcas = await getMarcas();
//                 setMarcas(nombreMarcas); 
//                 console.log(nombreMarcas)
//             } catch (error) {
//                 console.error('Error al obtener marcas', error);
//             }
//         };

//         fetchMarcas();
//     }, []);

//     const handleProductoChange = (e) => {
//         const { name, value } = e.target;
//         setProducto((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleImageChange = (e) => {
//         setProducto((prev) => ({ ...prev, imagen: e.target.files[0] }));
//     };


//     // const crearModelo = async () => {
//     //     const modeloData = {
//     //         nombreModelo: producto.nombreModelo,
//     //         idMarca: marca.id,
//     //     };

//     const handleProductoSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await crearModelo();

//             const formData = new FormData();
//             formData.append('nombre', producto.nombre);
//             formData.append('precio', producto.precio);
//             formData.append('codigo', producto.codigo);
//             formData.append('descripcion', producto.descripcion);
//             formData.append('nombreModelo', producto.nombreModelo);
//             formData.append('imagen', producto.imagen);

//             await handleProductoSubmit(formData);

//         } catch (error) {
//             console.error('Error al crear el producto:', error);
//             setError('Error al crear el producto');
//         }
//     };

//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-3xl font-bold mb-4">Crear Producto</h1>

//             <form onSubmit={handleProductoSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Columna 1: Nombre y Precio */}
//                     <div>
//                         <label className="block text-sm font-medium">Nombre</label>
//                         <input
//                             type="text"
//                             name="nombre"
//                             value={producto.nombre}
//                             onChange={handleProductoChange}
//                             required
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     {/* Columna 2: Modelo */}
//                     <div>
//                         <label className="block text-sm font-medium">Modelo</label>
//                         <input
//                             type="text"
//                             name="nombreModelo"
//                             value={producto.nombreModelo}
//                             onChange={handleProductoChange}
//                             required
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Columna 1: Precio */}
//                     <div>
//                         <label className="block text-sm font-medium">Precio</label>
//                         <input
//                             type="number"
//                             name="precio"
//                             value={producto.precio}
//                             onChange={handleProductoChange}
//                             required
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     {/* Columna 2: Marca */}
//                     <div>
//                         <label className="block text-sm font-medium">Marca</label>
//                         <select
//                             name="idMarca"
//                             value={producto.idMarca}
//                             onChange={handleProductoChange}
//                             required
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                         >
//                             <option value="">Selecciona una marca</option>
//                             {marcas.map((marca) => (
//                                 <option key={marca.id} value={marca.id}>
//                                     {marca.nombre}
//                                     const marcaId = marca.id
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium">Código</label>
//                     <input
//                         type="text"
//                         name="codigo"
//                         value={producto.codigo}
//                         onChange={handleProductoChange}
//                         required
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium">Descripción</label>
//                     <textarea
//                         name="descripcion"
//                         value={producto.descripcion}
//                         onChange={handleProductoChange}
//                         required
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium">Imagen</label>
//                     <input
//                         type="file"
//                         name="imagen"
//                         onChange={handleImageChange}
//                         required
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300"
//                 >
//                     Crear Producto
//                 </button>
//             </form>
//             {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//     );
// };

// export default Crear;