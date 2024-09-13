'use client'

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { login } from "../action"; 
import Link from 'next/link';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const handleLogin = async (data) => {
        await login(data);
        router.push('/products'); // Corrige el nombre de la ruta si es necesario
    }

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/your-background-image.jpg)' }}>
            <section className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md mx-auto min-h-[40vh]">
                <div className="font-serif text-center text-3xl text-black mb-2">
                    FELIX. A <br />MANSO
                </div>
                <h2 className="text-2xl font-semibold mb-6  text-gray-800">Iniciar Sesión</h2>
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="flex flex-col space-y-4"
                >
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'El correo electrónico es obligatorio' })}
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
                            {...register('password', { required: 'La contraseña es obligatoria' })}
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
