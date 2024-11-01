// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getMarcas, crearModelo, crearProducto } from '../../productos/action';

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
//     const [idMarca, setIdMarca] = useState('');
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchMarcas = async () => {
//             try {
//                 const nombreMarcas = await getMarcas();
//                 setMarcas(nombreMarcas); 
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

//     const handleMarcaChange = (e) => {
//         const selectedId = e.target.value; // Captura el id de la marca seleccionada
//         setIdMarca(selectedId); // Actualiza solo el id de la marca seleccionada
//         console.log('ID de la marca seleccionada:', selectedId); // Muestra el id en la consola
//     };

//     const handleImageChange = (e) => {
//         setProducto((prev) => ({ ...prev, imagen: e.target.files[0] }));
//     };

//     const handleProductoSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Crear el modelo primero usando `nombreModelo` y `idMarca`
//             const modeloData = {
//                 nombreModelo: producto.nombreModelo,
//                 idMarca: selectedId,
//             };

//             const modeloCreado = await crearModelo(modeloData);
//             const idModelo = modeloCreado.id; // Asumiendo que devuelve el id del modelo creado

//             // Crear el producto usando `idModelo`
//             const formData = new FormData();
//             formData.append('nombre', producto.nombre);
//             formData.append('precio', producto.precio);
//             formData.append('codigo', producto.codigo);
//             formData.append('descripcion', producto.descripcion);
//             formData.append('idModelo', idModelo); // Asignar el id del modelo creado
//             formData.append('imagen', producto.imagen);

//             await crearProducto(formData);
//             alert('Producto creado exitosamente');
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
//                     <div>
//                         <label className="block text-sm font-medium">Marca</label>
//                         <select
//                             name="idMarca"
//                             value={idMarca}
//                             onChange={handleMarcaChange}
//                             required
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                         >
//                             <option value="">Selecciona una marca</option>
//                             {marcas.map((marca) => (
//                                 <option key={marca.id} value={marca.id}>
//                                     {marca.nombre}
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



import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMarcas, crearModelo, crearProducto } from '../../productos/action';

const Crear = () => {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        codigo: '',
        descripcion: '',
        nombreModelo: '',
        idMarca: '', 
        imagen: null,
    });
    const [marcas, setMarcas] = useState([]);
    const [idMarca, setIdMarca] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                const nombreMarcas = await getMarcas();
                setMarcas(nombreMarcas); 
            } catch (error) {
                console.error('Error al obtener marcas', error);
                setError('No se pudieron cargar las marcas');
            }
        };
        fetchMarcas();
    }, []);

    const handleProductoChange = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({ ...prev, [name]: value }));
    };

    const handleMarcaChange = (e) => {
        const selectedId = e.target.value;
        setIdMarca(selectedId); // Actualiza solo el id de la marca seleccionada
        console.log('ID de la marca seleccionada:', selectedId);
    };

    const handleImageChange = (e) => {
        setProducto((prev) => ({ ...prev, imagen: e.target.files[0] }));
    };

    const handleProductoSubmit = async (e) => {
        e.preventDefault();
        try {
            // Crear el modelo primero usando `nombreModelo` y `idMarca`
            const modeloData = {
                nombre: producto.nombreModelo,
                idMarca: idMarca, // Cambiado a `idMarca`
            };

            const modeloCreado = await crearModelo(modeloData);
            console.log('Datos del modelo:', modeloData);

            const idModelo = modeloCreado.id; // Asumiendo que devuelve el id del modelo creado

            // Crear el producto usando `idModelo`
            const formData = new FormData();
            formData.append('nombre', producto.nombre);
            formData.append('precio', producto.precio);
            formData.append('codigo', producto.codigo);
            formData.append('descripcion', producto.descripcion);
            formData.append('imagen', producto.imagen);
            formData.append('idModelo', idModelo); // Asignar el id del modelo creado

            await crearProducto(formData);
            alert('Producto creado exitosamente');
        } catch (error) {
            console.error('Error al crear el producto:', error);
            setError('Error al crear el producto: ' + error.message);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Crear Producto</h1>
            <form onSubmit={handleProductoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <label className="block text-sm font-medium">Modelo</label>
                        <input
                            type="text"
                            name="nombreModelo"
                            value={producto.nombreModelo}
                            onChange={handleProductoChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <label className="block text-sm font-medium">Marca</label>
                        <select
                            name="idMarca"
                            value={idMarca}
                            onChange={handleMarcaChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Selecciona una marca</option>
                            {marcas.map((marca) => (
                                <option key={marca.id} value={marca.id}>
                                    {marca.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
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
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default Crear;
