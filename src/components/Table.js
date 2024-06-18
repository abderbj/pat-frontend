import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function Table(props) {
    const columns = props.columns;
    const rows = props.rows.map(row => ({
        ...row,
        status: row.status || 'En attente',
    }));
    
    return (
        <div style={{ height: 610, width: '100%' }}>
            <DataGrid
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '19px',
                        fontWeight: 'bold',
                    }
                }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
            />
        </div>
    );
}