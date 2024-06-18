import React from 'react';
import './Button.css'; 

const statusStyles = {
    Completé: 'completed',
    'Rejecté': 'rejected',
    'En attente': 'pending',
    'En livraison': 'in-delivery',
};

const Status = ({ status }) => (
    <button className={`status-button ${statusStyles[status]}`}>
        {status}
    </button>
);

export default Status;
