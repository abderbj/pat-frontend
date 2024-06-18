import React, { useState, useEffect } from 'react';
import './CommandsFrontPage.css';
import Table from './Table';
import Status from './Status';

function ListeDesCommandes(rows) {
    const props = {
        columns: [
            { field: 'Nom du produit', headerName: 'Nom du produit', width: 190 },
            { field: 'Nom du client', headerName: 'Nom du produit client', width: 190 },
            { field: 'date', headerName: 'Date de commande', width: 190 },
            {
                field: 'piece',
                headerName: 'Piece',
                type: 'number',
                width: 160,
            },
            {
                field: 'montant',
                headerName: 'Montant',
                width: 160,
            },
            {
                field: 'status',
                headerName: 'Status',
                sortable: false,
                width: 160,
                renderCell: (params) => <Status status={params.row.status} />,
            },
        ],
        rows
    };

    return (
        <div className='Commands-front-page'>
            <Table {...props} />
        </div>
    );
}

export default ListeDesCommandes;
