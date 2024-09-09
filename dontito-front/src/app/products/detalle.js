// Modal.jsx
import React from 'react';
import Image from 'next/image';

const Detalle = ({ producto, onClose }) => {
    if (!producto) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 transition-colors duration-200 text-2xl"
                >
                    &times;
                </button>
                <Image
                    width={300}
                    height={400}
                    src={`data:image/jpeg;base64,${producto.imagen}`}
                    alt={producto.nombre}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
                <p className="text-lg font-semibold mb-2">${producto.precio}</p>
                <p className="text-lg font-semibold mb-2">${producto.modelo}</p>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    );
};

export default Detalle;

