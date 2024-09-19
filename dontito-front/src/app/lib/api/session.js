import 'server-only';
import { cookies } from 'next/headers';
import { loginAPI } from './auth';
import { getIronSession } from 'iron-session';  // Usando iron-session para Next.js Edge

// Logout: destruye la sesión actual
export async function logout() {
  const session = await getSession();
  if (session) {
    await session.destroy();  // Elimina la sesión
  }
}

// SetSessionToken: guarda el token en la sesión
export async function setSessionToken(data) {
  const res = await loginAPI(data);  // Llama a la API de login
  const session = await getSession();  // Obtiene la sesión actual
  session.token = res.token || res.accessToken;  // Ajusta según la respuesta de loginAPI
  await session.save();  // Guarda la sesión
  return res;
}

// GetToken: obtiene el token de la sesión
export async function getToken() {
  const session = await getSession();
  return session.token;  // Devuelve el token de la sesión
}

// GetSession: obtiene la sesión actual
export async function getSession() {
  return await getIronSession(
    cookies(),  // Accede a las cookies
    {
      password: process.env.SESSION_SECRET,  // Usa la contraseña almacenada en variables de entorno
      cookieName: "session",  // Nombre de la cookie de la sesión
      cookieOptions: {
        httpOnly: true,  // Asegura que la cookie solo sea accesible vía HTTP (no por JavaScript)
        secure: process.env.NODE_ENV === "production",  // La cookie debe ser segura solo en producción
      }
    }
  );
}
