/* eslint-disable*/
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const VTable = () => {
  return (
    <div style={{ height: 650, width: '100%' }}>
    <DataGrid
        columns={[
            { headerName: 'Transition_ID', field: 'Transition_ID', width: 200 },
            { headerName: 'Pax_Name', field: 'Pax_Name', width: 100 },
            { headerName: 'Father/Husband_Name', field: 'Father/Husband_Name' },
            { headerName: 'Contact', field: 'Contact', width: 100 },
            { headerName: 'HomeAddress', field: 'HomeAddress', width: 100 },
            { headerName: 'Reference', field: 'Reference', width: 100 },
            { headerName: 'PakageType', field: 'PakageType', width: 100 },
            { headerName: 'OurCost', field: 'OurCost', width: 100 },
            { headerName: 'Sold', field: 'Sold', width: 100 },
            { headerName: 'Deposit', field: 'Deposit', width: 100 },
            { headerName: 'Balance', field: 'Balance', width: 100 },
            { headerName: 'PaymentHistory', field: 'PaymentHistory', width: 100 },
            { headerName: 'Country', field: 'Country', width: 100 },
            { headerName: 'TravelDate', field: 'TravelDate', width: 100 },
            { headerName: 'SubmitDate', field: 'SubmitDate', width: 100 },
            { headerName: 'RecievingDate', field: 'RecievingDate', width: 100 }
        ]}
        // rows={oRows}

        sx={{
            m: 1, mb: 2, mt: 2,
            boxShadow: 5,
            border: 2,
            borderColor: '#8A2BE2',
            '& .MuiDataGrid-cell:hover': {
                color: '#8A2BE2',
                backgroundColor: '#CBC3E3',

            },
        }}
    />
</div>
  )
}

export default VTable