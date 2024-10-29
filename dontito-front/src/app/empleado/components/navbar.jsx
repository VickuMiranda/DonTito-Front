"use client";
import { useRouter } from 'next/navigation';
import '../../globals.css';
import Cookies from 'js-cookie'; // Importa js-cookie

const Navbar = () => {
    const router = useRouter();

    const handleNavigateToProducts = () => {
        router.push('/productos');
    };

    const cerrarSesion = () => {
        // Eliminar el token de localStorage
        localStorage.removeItem('token');

        // Eliminar el token de las cookies
        Cookies.remove("auth_token", { path: "/" }); // Elimina la cookie

        // Redirigir al usuario a la página de inicio de sesión (o cualquier otra página)
        router.push('./login');  
    };

    return (
        <nav className="bg-gray-200 text-white px-4 py-2 flex justify-between items-center border-gray-700">
            <div className="font-serif text-3xl ml-10 text-black">
                FELIX. A <br />MANSO
            </div>
            <div className="flex space-x-6 text-black font-semibold">
                <button onClick={handleNavigateToProducts} className="button">
                    Productos
                </button>
                <button onClick={cerrarSesion} className="button">
                    Cerrar Sesión 
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
