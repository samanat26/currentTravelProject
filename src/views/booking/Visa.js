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
// import oRows from "./sampleVisa";




const Visa = () => {


    const initialValues = { tid: "", pname: "", fname: "", contact: "", address: "" };

    const [fvalues, setInitialValues] = React.useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues({ ...fvalues, [name]: value });
        console.log(fvalues);
    }

    // ...........date picker....................
    const [tvalue, setValuet] = React.useState(null);
    const [svalue, setValues] = React.useState(null);
    const [rvalue, setValuer] = React.useState(null);

    return <div>
        <Container maxWidth="lg">
            <Box xs={{ mt: 5 }}>
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
                        {/* .......................form............................ */}
                        <div>
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
                                    Visa
                                </Typography>
                            </Box>



                            {/* // .............................Form..................................                           */}
                            <form noValidate
                                autoComplete="off">

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
                                                Personal Information</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>

                                            <Box
                                                sx={{
                                                    '& > :not(style)': { p: 1, m: 1, width: '45ch' },
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
                                                    label="Transition ID"
                                                    placeholder="Enter your ID"
                                                    type="number"
                                                //     value={fvalues.tid}
                                                //     onChange={handleChange}
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="Pax Name"
                                                    placeholder="Enter your Pax Name"
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="Father/Husband Name"
                                                    placeholder="Enter your Father/Husband Name"
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    '& > :not(style)': { p: 1, m: 1, width: '33ch' },
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
                                                    label="Contact"
                                                    placeholder="Enter your Phone Number"
                                                    type="number"
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="Home Address"
                                                    placeholder="Enter your Full Address"
                                                />

                                                <TextField
                                                    id="outlined-name"
                                                    label="Country"
                                                    placeholder="Enter your Country"
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="Package Type"
                                                />

                                            </Box>
                                        </div>
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
                                                Balance & Reference</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            <Box
                                                sx={{
                                                    '& > :not(style)': { p: 1, m: 1, width: '33ch' },
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
                                                    label="Deposit"
                                                    placeholder="Enter your Deposit value"
                                                    type="number"
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="Balance"
                                                    placeholder="Enter your Balance"
                                                    type="number"
                                                />


                                                <TextField
                                                    id="outlined-name"
                                                    label="Our Cost"
                                                    placeholder="Enter your Cost"
                                                    type="number"
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="Sold"
                                                    placeholder="Enter your Value"
                                                    type="number"
                                                />    </Box>
                                            <Box
                                                sx={{
                                                    '& > :not(style)': { p: 1, m: 1, width: '33ch' },
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
                                                    label="Reference"
                                                    placeholder="Enter your Reference"
                                                />

                                                <TextField
                                                    id="outlined-name"
                                                    label="C/O"
                                                    placeholder="Enter your Value"
                                                />
                                                <TextField
                                                    id="outlined-name"
                                                    label="C/T"
                                                    placeholder="Enter your Value"
                                                />

                                                <TextField
                                                    id="outlined-name"
                                                    label="Payment History"
                                                    placeholder="Enter your Value"

                                                />


                                            </Box>
                                        </div>
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
                                                Dates</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            <Box
                                                sx={{
                                                    '& > :not(style)': { p: 1, m: 1, width: '33ch' },
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
                                                    label="Expected (NOP) Days"
                                                    placeholder="Enter your Value"
                                                    type="number"
                                                />
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Travel Date"
                                                        placeholder="Enter your Date"
                                                        type="number"
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
                                                        placeholder="Enter your Date"
                                                        type="number"
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
                                                        placeholder="Enter your Date"
                                                        type="number"
                                                        value={rvalue}
                                                        onChange={(newValue) => {
                                                            setValuer(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params}
                                                        />}
                                                    />
                                                </LocalizationProvider>

                                            </Box>
                                        </div></AccordionDetails>
                                </Accordion>


                                {/* .............................buttons........................................... */}

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
                        </div>
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
            </Box>


        </Container>
    </div>;
}

export default Visa;