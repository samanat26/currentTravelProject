import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
// import oRows from "./sampletic";


const Ticket = () => {
    const [dvalue, setValued] = React.useState(null);
    const [pvalue, setValuep] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const [tvalue, setValuet] = React.useState(null);
    const [rvalue, setValuer] = React.useState(null);

    return <div>
        <Container maxWidth="lg">

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box sx={{
                        p: 1.5,
                        boxShadow: 2,
                        border: 0.5,
                        borderColor: 'primary.light',

                    }}>
                        <Typography variant="h4"
                            sx={{
                                color: 'primary.dark',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            View Form</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>

                    <Box sx={{
                        mb: 3,
                        p: 1.5,
                        boxShadow: 2,
                        border: 0.5,
                        borderColor: 'primary.light',

                    }}>
                        <Typography variant="h1"
                            sx={{
                                color: 'primary.dark',
                                textAlign: 'center',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            Ticket   </Typography>
                    </Box>
                    {/* .......................form............................ */}

                    <form noValidate
                        autoComplete="off"
                    // onSubmit={handleSubmit}
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Box sx={{
                                    mb: 3,
                                    p: 1.5,
                                    borderColor: 'primary.light',
                                    width: '100%',
                                    borderLeft: '5px solid #3183ff',
                                }}>
                                    <Typography variant="h3"
                                        sx={{
                                            color: 'primary.dark',
                                            // textAlign:'center',
                                            '&:hover': {
                                                color: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                    >
                                        <SendIcon />  &nbsp;
                                        Basic Information</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                    <TextField
                                        id="outlined-name"
                                        type="number"
                                        label="Transition No"
                                        placeholder=" Enter your ID"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Father/Husband Name"
                                        placeholder=" Enter your Father/Husband Name"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Pax Name"
                                        placeholder=" Enter your Pax Name"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        type="number"
                                        label="Contact"
                                        placeholder=" Enter your Phone Number"
                                    /></Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Date of Birth"

                                            placeholder=" Enter your Date of birth"
                                            value={dvalue}
                                            onChange={(newValue) => {
                                                setValued(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>

                                    <TextField
                                        id="outlined-name"
                                        label="PNR"
                                        placeholder=" Enter your PNR"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="GSD PNR"
                                        placeholder=" Enter your GSD PNR"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Carrer"
                                        placeholder=" Enter your Carrer"
                                    />
                                </Box>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Box sx={{
                                    mb: 3,
                                    p: 1.5,
                                    borderColor: 'primary.light',
                                    width: '100%',
                                    borderLeft: '5px solid #3183ff',
                                }}>
                                    <Typography variant="h3"
                                        sx={{
                                            color: 'primary.dark',
                                            // textAlign:'center',
                                            '&:hover': {
                                                color: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                    >
                                        <SendIcon />  &nbsp;
                                        Invoice</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                    <TextField
                                        id="outlined-name"
                                        label="Invoice"
                                        type="number"
                                        placeholder=" Enter your Invoice"
                                    />
                                  
                                    <TextField
                                        id="outlined-name"
                                        label="Taxes"
                                        type="number"
                                        placeholder=" Enter your Taxes"
                                    />

                                    <TextField
                                        id="outlined-name"
                                        label="Fare"
                                        type="number"
                                        placeholder=" Enter your Fare"
                                    />
                                     <TextField
                                        id="outlined-name"
                                        label="Sold"
                                        type="number"
                                        placeholder=" Enter your Sold"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >


                                    <TextField
                                        id="outlined-name"
                                        label="From To"
                                        placeholder=" Enter the Value"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="To From"
                                        placeholder=" Enter your Value"
                                    />
                                  
                                    <TextField
                                        id="outlined-name"
                                        label="Total Fare"
                                        type="number"
                                        placeholder=" Enter your Total Fare"
                                    />
                                   
                                    <TextField
                                        id="outlined-name"
                                        label="Deposit"
                                        type="number"
                                        placeholder=" Enter your Deposit Value"
                                    />
                                </Box>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Box sx={{
                                    mb: 3,
                                    p: 1.5,
                                    borderColor: 'primary.light',
                                    width: '100%',
                                    borderLeft: '5px solid #3183ff',
                                }}>
                                    <Typography variant="h3"
                                        sx={{
                                            color: 'primary.dark',
                                            // textAlign:'center',
                                            '&:hover': {
                                                color: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                    >
                                        <SendIcon />  &nbsp;
                                       Visa</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                     <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="PP Expiry"
                                    placeholder=" Enter your PP Expiry Value"
                                    type="number"
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
                                placeholder=" Enter your Visa Type"
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Visa Expiry"
                                    type="number"
                                    placeholder=" Enter your Visa Expiry"
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
                                    type="number"
                                    placeholder=" Enter your Travel Date"
                                    value={tvalue}
                                    onChange={(newValue) => {
                                        setValuet(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                                    </Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                    
                                  <TextField
                                        id="outlined-name"
                                        label="Ticket Number"
                                        placeholder=" Enter your Ticket Number"
                                        type="number"
                                    />

                                    <TextField
                                        id="outlined-name"
                                        label="Class"
                                        placeholder=" Enter your Class"

                                    />


                            <TextField
                                id="outlined-name"
                                label="PP Nationality"
                                placeholder=" Enter your PP Nationality"
                            />
                            <TextField
                                id="outlined-name"
                                label="PP Number"
                                placeholder=" Enter your PP Number"
                                type="number"
                            />
                                
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Box sx={{
                                    mb: 3,
                                    p: 1.5,
                                    borderColor: 'primary.light',
                                    width: '100%',
                                    borderLeft: '5px solid #3183ff',
                                }}>
                                    <Typography variant="h3"
                                        sx={{
                                            color: 'primary.dark',
                                            // textAlign:'center',
                                            '&:hover': {
                                                color: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                    >
                                        <SendIcon />  &nbsp;
                                        Reference</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                    <TextField
                                id="outlined-name"
                                label="Reference"
                                placeholder=" Enter your Reference"
                            />
                            <TextField
                                id="outlined-name"
                                label="Pax type"
                                placeholder=" Enter your Pax Type"
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Refund Date"
                                    type="number"
                                    placeholder=" Enter your Refund Date"
                                    value={rvalue}
                                    onChange={(newValue) => {
                                        setValuer(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <TextField
                                id="outlined-name"
                                placeholder=" Enter your R/D with Pax"
                                label="R/D with Pax"
                            /></Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        borderLeft: '2px solid #3183ff',
                                        borderBottom: '1px solid #3183ff',
                                        backgroundColor: '#cfe8fc',
                                        boxShadow: 1,
                                        color: 'primary.main',
                                    }} >
                                   <TextField
                                id="outlined-name"
                                label="Protector"
                                placeholder=" Enter your Value"
                            />

                            <TextField
                                id="outlined-name"
                                label="C/O"
                                placeholder=" Enter your C/O"
                            />
                            <TextField
                                id="outlined-name"
                                label="C/T"
                                placeholder=" Enter your C/T"
                            />
                            <TextField
                                id="outlined-name"
                                label="Payment History"
                                placeholder=" Enter your Payment History"
                            /></Box>
                                <Box
                            sx={{
                                '& > :not(style)': { p: 1, m: 1, width: '70ch' },
                                m: 1, mb: 3, mt: 2,
                                boxShadow: 1,
                                backgroundColor: '#cfe8fc',
                                borderLeft: '2px solid #3183ff',
                                borderBottom: '1px solid #3183ff',
                                borderColor: 'primary.light',
                                '& .MuiDataGrid-cell:hover': {
                                    color: 'primary.main',
                                    backgroundColor: '#cfe8fc',
                                }
                            }}>
                            <TextField
                                id="outlined-name"
                                label="Staff Name"
                                placeholder=" Enter the Staff Name"
                            />
                            <TextField
                                multiline rows={3}
                                id="outlined-name"
                                label="Description"
                                placeholder=" Enter Description"
                            />
                        </Box>
                                
                            </AccordionDetails>
                        </Accordion>
                         
                           
                 


                    


                        {/* .............................buttons.................................................. */}

                        <Box sx={{
                            // float: 'right',
                            '& > button': { m: 2 }
                        }}>

                            <LoadingButton
                                size="large"
                                // onClick={handleSubmitClick}
                                endIcon={<SendIcon />}
                                // loading={submitLoading}
                                loadingPosition="end"
                                variant="contained"
                            >
                                Submit
                            </LoadingButton>
                            <LoadingButton
                                size="large"
                                color="secondary"
                                // onClick={handleResetClick}
                                // loading={resetLoading}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                            >
                                Reset
                            </LoadingButton>
                        </Box>
                    </form>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    sx={{
                        // filter: 'invert(1)',
                        color: 'primary.dark',
                        '&:hover': {
                            color: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Box sx={{
                        p: 1.5,
                        boxShadow: 2,
                        border: 0.5,
                        borderColor: 'primary.light',

                    }}>
                        <Typography variant="h4"
                            sx={{
                                color: 'primary.dark',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            Show Details</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
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
                                borderColor: 'primary.light',
                                '& .MuiDataGrid-cell:hover': {
                                    color: 'primary.main',
                                    backgroundColor: '#cfe8fc',

                                },
                            }}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>



        </Container >
    </div >;
}

export default Ticket;