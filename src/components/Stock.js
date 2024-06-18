import React, { useState, useEffect } from 'react';
import './CommandsFrontPage.css';
import Table from './Table';
import Status from './Status';

function ListeDesCommandes(rows) {
    const columns = [
        { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value} alt="product" className='stock-img'/> },
        { field: 'Nom', headerName: 'Nom du produit', width: 190 },
        { field: 'Prix', headerName: 'Prix', width: 130 },
        {
            field: 'Piece',
            headerName: 'Pièce',
            type: 'number',
            width: 100,
        },
        {
            field: 'Remise',
            headerName: 'Remise',
            width: 120,
        },
        {
            field: 'Action',
            headerName: 'Action',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <div className='edit-delete'>
                    <button className='edit-button'>Edit</button>
                    <button className='delete-button'>Delete</button>
                </div>
            ),
        },
    ];

    const props = {
        columns,
        rows
    };
    return (
        <div className='Commands-front-page'>
            <Table {...props} />
        </div>
    );
}

export default ListeDesCommandes;
