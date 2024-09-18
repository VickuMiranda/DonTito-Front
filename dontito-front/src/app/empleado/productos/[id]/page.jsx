'use client';
import React from 'react';
import Detalle from '../detalle';

export default function  Page({ params })  {
    const { id } = params;

    return <Detalle id={id} />;
};


