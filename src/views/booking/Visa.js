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


const Visa = () =>
{

    const [tvalue, setValuet] = React.useState(null);
    const [svalue, setValues] = React.useState(null);
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
                   <h1>Visa</h1>
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
                    label="Transition ID"
                />
                <TextField
                    id="outlined-name"
                    label="Pax Name"
                />
                <TextField
                    id="outlined-name"
                    label="Father/Husband Name"
                />
                <TextField
                    id="outlined-name"
                    label="Contact"
                />
                <TextField
                    id="outlined-name"
                    label="Home Address"
                />
                <TextField
                    id="outlined-name"
                    label="Reference"
                />
                <TextField
                    id="outlined-name"
                    label="Package Type"
                />
                <TextField
                    id="outlined-name"
                    label="Our Cost"
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
                    label="Balance"
                />
                <TextField
                    id="outlined-name"
                    label="Payment History"
                />
                <TextField
                    id="outlined-name"
                    label="Country"
                />
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Submit Date"
                        value={svalue}
                        onChange={(newValue) => {
                            setValues(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Recieving Date"
                        value={rvalue}
                        onChange={(newValue) => {
                            setValuer(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '34ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-name"
                    label="Expected (NOP) Days"
                />
                <TextField
                    id="outlined-name"
                    label="C/O"
                />
                <TextField
                    id="outlined-name"
                    label="C/T"
                />
            </Box>


            <Box sx={{ '& button': { m: 1 } }}> <div>
                <Button variant="outlined" size="large">
                    Submit
                </Button>
                <Button color="secondary" variant="outlined" size="large">
                    Reset
                </Button>
            </div></Box>
                   </div>
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
                    columns={[{ field: 'Transition_ID', width: 200 },
                    { field: 'Pax_Name', width: 100 },
                    {field:'Father/Husband_Name'},
                    { field: 'Contact', width: 100 },
                    { field: 'HomeAddress', width: 100 },
                    { field: 'Reference', width: 100 },
                    { field: 'PakageType', width: 100 },
                    { field: 'OurCost', width: 100 },
                    { field: 'Sold', width: 100 },
                    { field: 'Deposit', width: 100 },
                    { field: 'Balance', width: 100 },
                    { field: 'PaymentHistory', width: 100 },
                    { field: 'Country', width: 100 },
                    { field: 'TravelDate', width: 100 },
                    { field: 'SubmitDate', width: 100 },
                    { field: 'RecievingDate', width: 100 }
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

export default Visa;