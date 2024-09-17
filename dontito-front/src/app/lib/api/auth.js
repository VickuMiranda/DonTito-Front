// import 'server-only'

// export async function loginAPI(data){
//     const res = await fetch('https://localhost:7183/api/Login/Login',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })

//     if(!res.ok){
//         throw new Error('Failed to fetch data')
//     }

//     return "Bearer " + res.json()
// }

import axios from 'axios';
import 'server-only';

export async function loginAPI(data) {
    try {
        // Cambia axios.get a axios.post y coloca `data` en el segundo parámetro
        const res = await axios.post('https://localhost:7183/api/Login/Login', {
            correo: data.email,
            clave: data.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Extrae el token del resultado
        const result = res.data;
        console.log(result);
        
        // Ajusta la concatenación según el formato de respuesta. Asumiendo que `result` es un objeto que contiene un campo `accessToken`.
        return "Bearer " + (result.accessToken || result.token || ''); 

    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw new Error('Failed to fetch data');
    }
}
