import React from 'react';
import Image from 'next/image';

const Logos = ({ brands }) => {
    return (
        <div className="flex overflow-x-auto space-x-6 p-4">
            {brands.map((brand) => (
                <div key={brand.id} className="flex-shrink-0 flex justify-center items-center">
                    <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={100} // Ajusta el ancho según sea necesario
                        height={50} // Ajusta la altura según sea necesario
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default Logos;
