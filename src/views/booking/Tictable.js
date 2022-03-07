/* eslint-disable*/
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const Tictable = () => {
  return (
    <div>
         {/* ...................Table............................ */}
         <div style={{ height: 450, width: '100%' }}>
                        <DataGrid
                            columns={[
                                { headerName: 'Transition_ID', field: 'Transition_ID', width: 150 },
                                { headerName: 'Father/Husband_Name', field: 'Father/Husband_Name' },
                                { headerName: 'Pax_Name', field: 'Pax_Name', width: 100 },
                                { headerName: 'Contact', field: 'Contact', width: 100 },
                                { headerName: 'PNR', field: 'PNR', width: 100 },
                                { headerName: 'GDS_PNR', field: 'GDS_PNR', width: 100 },
                                { headerName: 'TicketNumber', field: 'TicketNumber', width: 100 },
                                { headerName: 'Taxs', field: 'Taxs', width: 100 },
                                { headerName: 'Carrer', field: 'Carrer', width: 100 },
                                { headerName: 'Fare', field: 'Fare', width: 100 },
                                { headerName: 'Class', field: 'Class', width: 100 },
                                { headerName: 'TotalFare', field: 'TotalFare', width: 100 },
                                { headerName: 'Sold', field: 'Sold', width: 100 },
                                { headerName: 'Deposit', field: 'Deposit', width: 100 },
                                { headerName: 'From_To', field: 'From_To', width: 100 },
                                { headerName: 'To_From', field: 'To_From', width: 100 },
                                { headerName: 'PP_Nationality', field: 'PP_Nationality', width: 100 },
                                { headerName: 'PP_Number', field: 'PP_Number', width: 100 },
                                { headerName: 'DateOfBirth', field: 'DateOfBirth', width: 100 },
                                { headerName: 'PP_Expiry', field: 'PP_Expiry', width: 100 },
                                { headerName: 'VisaType', field: 'VisaType', width: 100 },
                                { headerName: 'VisaExpiry', field: 'VisaExpiry', width: 100 },
                                { headerName: 'TravelDate', field: 'TravelDate', width: 100 },
                                { headerName: 'Reference', field: 'Reference', width: 100 },
                                { headerName: 'PaxType', field: 'PaxType', width: 100 },
                                { headerName: 'RefundDate', field: 'RefundDate', width: 100 },
                                { headerName: 'R/DwithPax', field: 'R/DwithPax', width: 100 },
                                { headerName: 'Protector', field: 'Protector', width: 100 },
                                { headerName: 'Invoice', field: 'Invoice', width: 100 },
                                { headerName: 'C/O', field: 'C/O', width: 100 },
                                { headerName: 'C/T', field: 'C/T', width: 100 },
                                { headerName: 'PaymentHistory', field: 'PaymentHistory', width: 100 },
                                { headerName: 'Staff_Name', field: 'Staff_Name', width: 100 },
                                { headerName: 'Description', field: 'Description', width: 100 },

                            ]}
                            // rows={rows}
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

export default Tictable