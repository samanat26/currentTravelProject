/* eslint-disable*/
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const Temptable = () => {
  return (
    <div>
          {/* ...................Table............................ */}
          <div style={{ height: 450, width: '100%' }}>
                            <DataGrid
                                columns={[
                                {  field: "Pax_Name", headerName: "Pax_Name", width: 150 },
                                {  field: "Contact",headerName: "Contact", width: 150 },
                                {  field: " PNR",headerName: "PNR" , width: 150 },
                                {  field: "GSD_PNR",headerName: "GSD_PNR", width: 150 },
                                {  field: "Carrer",headerName: "Carrer", width: 150 },
                                {  field: "TotalFare",headerName: "TotalFare", width: 150 },
                                {  field: "Sold",headerName: "Sold", width: 150 },
                                {  field: "TimeLimit",headerName: "TimeLimit", width: 150 }]}
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

export default Temptable