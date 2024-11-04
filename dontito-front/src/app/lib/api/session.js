// import 'server-only';
// import { cookies } from 'next/headers';
// import { loginAPI } from './auth';
// import { getIronSession } from 'iron-session';  // Usando iron-session para Next.js Edge

// // Logout: destruye la sesión actual
// export async function logout() {
//   const session = await getSession();
//   if (session) {
//     await session.destroy();  // Elimina la sesión
//   }
// }



// // SetSessionToken: guarda el token en la sesión
// export async function setSessionToken(data) {
//   const res = await loginAPI(data);  // Llama a la API de login
//   const session = await getSession();  // Obtiene la sesión actual
//   session.token = res.token || res.accessToken;  // Ajusta según la respuesta de loginAPI
  
//   await session.save();  // Guarda la sesión
//   return res;  // Devuelve la respuesta completa
// }




// export async function getServerSideProps(context) {
//   const token = await loginAPI();

//   if (!token) {
//     return {
//       redirect: {
//         destination: './login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},  // Pasar props si es necesario
//   };
// }


// // GetSession: obtiene la sesión actual
// export async function getSession() {
//   return await getSession(
//     cookies(),  // Accede a las cookies
//     {
//       password: process.env.SESSION_SECRET,  // Usa la contraseña almacenada en variables de entorno
//       cookieName: "session",  // Nombre de la cookie de la sesión
//       cookieOptions: {
//         httpOnly: true,  // Asegura que la cookie solo sea accesible vía HTTP (no por JavaScript)
//         secure: process.env.NODE_ENV === "production",  // La cookie debe ser segura solo en producción
//       }
//     }
//   );
// }
import 'server-only';
import { cookies } from 'next/headers';
import { loginAPI } from './auth';
import { getIronSession } from 'iron-session';  // Utiliza iron-session para Next.js Edge

// Logout: destruye la sesión actual
export async function logout() {
  const session = await getSession();
  if (session) {
    session.destroy();  // Elimina la sesión
  }
}

// setSessionToken: guarda el token en la sesión y en las cookies
export async function setSessionToken(data) {
  const res = await loginAPI(data);  // Llama a la API de login
  const session = await getSession();  // Obtiene la sesión actual
  if (res && res.token) {
    session.token = res.token;  // Ajusta según la respuesta de loginAPI

    // Guardar el token en las cookies
    const cookieStore = cookies();
    cookieStore.set("auth_token", res.token, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,  // Duración de la cookie en segundos
      sameSite: "strict",
      path: "/",
    });

    await session.save();  // Guarda la sesión
  }
  return res;  // Devuelve la respuesta completa
}

// getServerSideProps: maneja la autenticación en el lado del servidor
export async function getServerSideProps(context) {
  const token = await loginAPI();

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},  // Pasar props si es necesario
  };
}

// getSession: obtiene la sesión actual
export async function getSession() {
  const session = await getIronSession(cookies(), {
    cookieName: "auth_cookie",
    password: process.env.SESSION_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,
      sameSite: "strict",
      path: "/",
    },
  });
  return session;
}
