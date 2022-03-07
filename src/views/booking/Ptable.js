/* eslint-disable*/
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';



const Ptable = () => {
  return (
    <div>
           {/* ...................Table............................ */}
           <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                    columns={[
                        { headerName: 'Transition_ID', field: 'Transition_ID', width: 150 },
                        { headerName: 'Pax_Name', field: 'Pax_Name', width: 150 },
                        { headerName: 'Contact', field: 'Contact', width: 150 },
                        { headerName: 'Type', field: 'Type', width: 150 },
                        { headerName: 'Country', field: 'Country', width: 150 },
                        { headerName: 'OurCost', field: 'OurCost', width: 150 },
                        { headerName: 'Deposit', field: 'Deposit', width: 150 },
                        { headerName: 'Sold', field: 'Sold', width: 150 },
                        { headerName: 'Balance', field: 'Balance', width: 150 },
                        { headerName: 'Reference', field: 'Reference', width: 150 },
                        { headerName: 'C/O', field: 'C/O', width: 150 },
                        { headerName: 'C/T', field: 'C/T', width: 150 }
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
    </div>
  )
}

export default Ptable