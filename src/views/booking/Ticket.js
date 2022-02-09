import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';



const rows = [
    {
        id: 1,
        Pax_Name: '@MUI',
        Contact: '0000020',
        PNR: 22,
        GSD_PNR: 22,
        Carrer: 'none',
        TotalFare: '8888',
        Sold: 'none',
        TimeLimit: 'null',
    },

];

const Ticket = () => {
    const [dvalue, setValued] = React.useState(null);
    const [pvalue, setValuep] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const [tvalue, setValuet] = React.useState(null);
    const [rvalue, setValuer] = React.useState(null);

    return <div>
        <Container maxWidth="md">
            <Box xs={{ mt: 5 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>View Form</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* .......................form............................ */}
                        <div>
                        <h1>Ticket </h1>
            {/* <Box sx={{ bgcolor '#cfe8fc', height: '10:0vh' }} /> */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-name"
                    label="Transition No"
                />
                <TextField
                    id="outlined-name"
                    label="Father/Husband Name"
                />
                <TextField
                    id="outlined-name"
                    label="Pax Name"
                />
                <TextField
                    id="outlined-name"
                    label="Contact"
                />
                <TextField
                    id="outlined-name"
                    label="PNR"
                />
                <TextField
                    id="outlined-name"
                    label="GSD PNR"
                />
                <TextField
                    id="outlined-name"
                    label="Ticket Number"
                />
                <TextField
                    id="outlined-name"
                    label="Taxes"
                />
                <TextField
                    id="outlined-name"
                    label="Carrer"
                />
                <TextField
                    id="outlined-name"
                    label="Fare"
                />
                <TextField
                    id="outlined-name"
                    label="Class"
                />
                <TextField
                    id="outlined-name"
                    label="Total Fare"
                />
                <TextField
                    id="outlined-name"
                    label="Sold"
                />
                <TextField
                    id="outlined-name"
                    label="Deposit"
                />
                <TextField
                    id="outlined-name"
                    label="From To"
                />
                <TextField
                    id="outlined-name"
                    label="To From"
                />
                <TextField
                    id="outlined-name"
                    label="PP Nationality"
                />
                <TextField
                    id="outlined-name"
                    label="PP Number"
                />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date of Birth"
        value={dvalue}
        onChange={(newValue) => {
          setValued(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="PP Expiry"
        value={pvalue}
        onChange={(newValue) => {
          setValuep(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
                <TextField
                    id="outlined-name"
                    label="Visa Type"
                />
                   <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Visa Expiry"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Travel Date"
        value={tvalue}
        onChange={(newValue) => {
          setValuet(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
                <TextField
                    id="outlined-name"
                    label="Reference"
                />
                <TextField
                    id="outlined-name"
                    label="Pax type"
                />
                   <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Refund Date"
        value={rvalue}
        onChange={(newValue) => {
          setValuer(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
                <TextField
                    id="outlined-name"
                    label="R/D with Pax"
                />
                <TextField
                    id="outlined-name"
                    label="Protector"
                />
                <TextField
                    id="outlined-name"
                    label="Invoice"
                />
                <TextField
                    id="outlined-name"
                    label="C/O"
                />
                <TextField
                    id="outlined-name"
                    label="C/T"
                />
                <TextField
                    id="outlined-name"
                    label="Payment History"
                />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '52ch' },
                    }}
                    noValidate
                    autoComplete="off"
                > <TextField
                        id="outlined-name"
                        label="Staff Name"
                    />
                    <TextField
                        multiline rows={2}
                        id="outlined-name"
                        label="Description"
                    />
                </Box>
                        </div>
                        
{/* ............................button............................... */}
            <Box sx={{ '& button': { m: 1 } }}> <div>
                <Button variant="outlined" size="large">
                    Submit
                </Button>
                <Button color="secondary" variant="outlined" size="large">
                    Reset
                </Button>
            </div></Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>View Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* ...................Table............................ */}
                        <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'Transition_ID', width: 150 },
        {field:'Father/Husband_Name'},
        {field:'Pax_Name', width:100} ,
         { field: 'Contact', width: 100 },
          {field: 'PNR', width: 100},
          {field:'GDS_PNR', width: 100}, 
          {field:'TicketNumber', width: 100},
           {field:'Taxs', width: 100},
           {field:'Carrer', width: 100},
           {field:'Fare', width: 100},
           {field:'Class'},
           {field:'TotalFare', width:100} ,
           {field:'Sold', width:100} ,
           {field:'Deposit', width:100} ,
           {field:'From_To', width:100} ,
           {field:'To_From', width:100} ,
           {field:'PP_Nationality', width:100} ,
           {field:'PP_Number', width:100} ,
           {field:'DateOfBirth', width:100} ,
           {field:'PP_Expiry', width:100} ,
           {field:'VisaType', width:100} ,
           {field:'VisaExpiry', width:100} ,
           {field:'TravelDate', width:100} ,
           {field:'Reference', width:100} ,
           {field:'PaxType', width:100} ,
           {field:'RefundDate', width:100} ,
           {field:'R/DwithPax', width:100} ,
           {field:'Protector', width:100} ,
           {field:'Invoice', width:100} ,
           {field:'C/O'},
           {field:'C/T'},
           {field:'PaymentHistory', width:100} ,
           {field:'Staff_Name', width:100} ,
           {field:'Description', width:100} ,
        
        ]}
        rows={rows}
      />
    </div>
                    </AccordionDetails>
                </Accordion>
            </Box>


        </Container>
    </div>;
}

export default Ticket;