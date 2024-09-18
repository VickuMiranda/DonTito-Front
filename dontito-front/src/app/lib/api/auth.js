import axios from 'axios';
import 'server-only';

export async function loginAPI(data) {
    try {
        const res = await axios.post('https://localhost:7183/api/Login/Login', {
            correo: data.email,
            clave: data.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = res.data;
        return "Bearer " + (result.accessToken || result.token || ''); 

    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw new Error('Failed to fetch data');
    }
}
