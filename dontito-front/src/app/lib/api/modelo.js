import axios from 'axios';

export async function getMarcaXModelo(nombre) {
    try {
        const response = await axios.get(`https://localhost:7183/api/Modelo/api/v1/modelo/nombre/${nombre}`, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function postModelo(data) {
    try {
        const response = await axios.get(`https://localhost:7183/api/Modelo/api/v1/agregar/modelo`, data, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getModeloXNombre(nombre) {
    try {
        const response = await axios.get(`https://localhost:7183/api/Modelo/api/v1/modelo/nombre/${nombre}`, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}