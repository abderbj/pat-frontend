import React, { useState, useEffect } from 'react';
import './CommandsFrontPage.css';
import Table from './Table';
import Status from './Status';
import ListeDesCommandes from './ListeDesCommandes';

function CommandsFrontPage() {
    const allRows = [];
    const daysPerMonth = Math.ceil(30 / 12);
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < daysPerMonth; j++) {
            const date = new Date(2024, i, j + 1);
            if (date.getMonth() !== i) break;

            allRows.push({
                id: allRows.length + 1,
                'Nom du produit': `Produit ${allRows.length + 1}`,
                'Nom du client': `Client ${allRows.length + 1}`,
                date: date.toISOString().split('T')[0],
                piece: Math.floor(Math.random() * 100),
                montant: `€${(Math.random() * 1000).toFixed(2)}`,
                status: ['Completé', 'En attente', 'En livraison', 'Rejecté'][Math.floor(Math.random() * 4)],
            });
        }
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthNums = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentMonthNum = monthNums[currentMonth];

    const [month, setMonth] = useState(currentMonthNum);
    const [filteredRows, setFilteredRows] = useState([]);

    const handleChange = (event) => {
        const selectedMonth = monthNums[monthNames.indexOf(event.target.value)];
        setMonth(selectedMonth);
    };

    useEffect(() => {
        const filtered = allRows.filter(row => row.date.split('-')[1] === month);
        setFilteredRows(filtered);
    }, [month]);

    return (
        <div className='Commands-front-page'>
            <div className='Commands-front-page-header'>
                <h1 className='Commands-front-page-title'>Détailles des ventes</h1>
                <div className='select_container'>
                    <select value={monthNames[monthNums.indexOf(month)]} onChange={handleChange} className='Commands-front-page-select'>
                        {monthNames.map((monthName) => (
                            <option key={monthName} value={monthName}>{monthName}</option>
                        ))}
                    </select>
                </div>
            </div>
            <ListeDesCommandes rows={filteredRows} />
        </div>
    );
}

export default CommandsFrontPage;
