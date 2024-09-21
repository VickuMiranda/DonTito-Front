'use client';
import React from 'react';
import Editar from '../editar';

export default function  Page({ params })  {
    const { id } = params;

    return <Editar id={id} />;
};


