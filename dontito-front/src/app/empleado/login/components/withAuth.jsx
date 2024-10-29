import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const token = Cookies.get("auth_token"); // Obtener el token de las cookies

        useEffect(() => {
            if (!token) {
                // Si no hay token, redirigir al usuario a la página de inicio de sesión
                router.push('/login');
            }
        }, [token, router]);

        return token ? <WrappedComponent {...props} /> : null; // Renderiza el componente solo si hay token
    };
};

export default withAuth;
