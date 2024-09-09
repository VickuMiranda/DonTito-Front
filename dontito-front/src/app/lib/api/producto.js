// import 'server-only';

// export async function getProducto( ) {

//     const res = await fetch(`https://localhost:7183/api/Producto/api/v1/productos`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch adoptions');
//     }
//     return res.json();
// }


// En lugar de fetch, usa axios
import axios from 'axios';

export async function getProducto() {
    try {
        const response = await axios.get('https://localhost:7183/api/Producto/api/v1/productos', {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
