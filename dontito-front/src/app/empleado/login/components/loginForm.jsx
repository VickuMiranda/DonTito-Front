'use client'

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { login } from "../action";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const Logearse = async (data) => {
        try {
            console.log(data);
    
            // Hacer la llamada a la API para el login y obtener el objeto completo
            const response = await login(data);
    
            // Acceder al token y guardarlo en localStorage
            if (response && response.token) {
                //localStorage.setItem('token', `Bearer ${response.token}`);
                router.push('./productos');  // Redirigir después del login exitoso

            } else {
                console.error('La respuesta de la API no contiene token');
            }
    
            
            console.log('Datos adicionales:', response);  
        } catch (error) {
            console.error("Error en el login:", error.response ? error.response.data : error.message);
        }
    };
    
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/Tractor.png)' }}>
            <section className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md mx-auto min-h-[40vh]">
                <div className="font-serif text-center text-3xl text-black mb-2">
                    FELIX. A <br />MANSO
                </div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Iniciar Sesión</h2>
                <form
                    onSubmit={handleSubmit(Logearse)} // Usar el handleSubmit de react-hook-form
                    className="flex flex-col space-y-4"
                >
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'El correo electrónico es obligatorio' })} // Registrar el campo con react-hook-form
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Introduce tu correo electrónico"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'La contraseña es obligatoria' })} // Registrar el campo con react-hook-form
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Introduce tu contraseña"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="mx-auto py-2 px-4 bg-black text-white rounded-full hover:bg-primary-blue-dark transition-colors duration-300"
                    >
                        Iniciar Sesion
                    </button>
                </form>
            </section>
        </div>
    );
}

export default LoginForm;
