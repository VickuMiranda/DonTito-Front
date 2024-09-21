"use client";
import { useRouter } from 'next/navigation';
import '../../globals.css';

const Navbar = () => {
    const router = useRouter();

    const handleNavigateToProducts = () => {
        router.push('/empleado/productos');
    };

    const handleCrearProducto = () => {
        router.push('/empleado/crearProducto');
    };

    const handleLogout = async () => {
        try {
            await logout();  // Llama a la función de cierre de sesión
            router.push('/login');  // Redirige al usuario a la página de inicio de sesión
        } catch (error) {
            console.error('Logout failed:', error);
            // Maneja el error según sea necesario
        }
    };


    return (
        <nav className="bg-gray-200 text-white px-4 py-2 flex justify-between items-center border-gray-700">
            <div className="font-serif text-3xl ml-10 text-black">
                FELIX. A <br />MANSO
            </div>
            <div className="flex space-x-6 text-black font-semibold">
            <button onClick={handleCrearProducto} className="button">
                    Crear Producto
                </button>
                <button onClick={handleNavigateToProducts} className="button">
                    Productos
                </button>
                <button onClick={handleLogout} className="button">
                    Cerrar Sesión 
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
