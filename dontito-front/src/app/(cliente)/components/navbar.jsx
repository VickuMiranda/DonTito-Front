"use client";
import { useRouter } from 'next/navigation';
import '../../globals.css';

const Navbar = () => {
    const router = useRouter();

    const handleNavigateInicio = () => {
        router.push('/');
    };

    const handleNavigateToAbout = () => {
        router.push('/#sobre-nosotros');
    };

    const handleNavigateToProducts = () => {
        router.push('/products');
    };

    const handleNavigateToContact = () => {
        router.push('#contacto');
    };

    const handleNavigateToCart = () => {
        router.push('/carrito');
    };

    return (
        <nav className="bg-gray-200 text-white px-4 py-2 flex justify-between items-center border-gray-700">
            <div className="font-serif text-3xl ml-10 text-black cursor-pointer hover:text-white transition duration-200"
                onClick={handleNavigateInicio}
            >
                FELIX. A <br />MANSO
            </div>
            <div className="flex space-x-6 text-black font-semibold">
            <button onClick={handleNavigateInicio} className="button">
                    Inicio
                </button>
                <button onClick={handleNavigateToAbout} className="button">
                    Sobre Nosotros
                </button>
                <button onClick={handleNavigateToProducts} className="button">
                    Productos
                </button>
                <button onClick={handleNavigateToContact} className="button">
                    Contacto
                </button>
                <button onClick={handleNavigateToCart} className="inline-flex items-center">
                    Mi carrito
                    <img src="/images/Carrito.png" alt="Carrito" className="w-5 h-5 ml-2" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
