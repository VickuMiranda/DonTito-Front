'use client';
import React from 'react';
import Detalle from '../components/detalle'; // Ajusta esta ruta según tu estructura de carpetas

export default function  Page  ({ params })  {
    const { id } = params;

    return <Detalle id={id} />;
};


