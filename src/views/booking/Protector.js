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
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
// import oRows from "./sampleProtector";


const Protector = () => (

    <div>
        <Container maxWidth="lg">
            <Box xs={{ mt: 5 }}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
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
                                    Protector</Typography>
                            </Box>

                            {/* <Box sx={{ bgcolor '#CFE8FC', height: '10:0vh' }} /> */}
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
                                                Personal Information</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>

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
                                            <TextField id="outlined-name" label="Transition ID"  type="number" placeholder="Enter your ID" />
                                            <TextField id="outlined-name" label="Pax Name" placeholder="Enter your PaxName" />
                                            <TextField id="outlined-name" label="Contact"  type="number" placeholder="Enter your Number" />
                                            <TextField id="outlined-name" label="Country" placeholder="Enter your Country" />
                                        </Box>
                                    </AccordionDetails></Accordion>


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
                                               Cost</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
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
                                    <TextField id="outlined-name" placeholder="Enter your Type" label="Type" />
                                    <TextField id="outlined-name"  type="number" placeholder="Enter your Cost" label="Our Cost" />
                                    <TextField id="outlined-name"  type="number" placeholder="Enter your Deposit Value" label="Deposit" />
                                    <TextField id="outlined-name"  type="number" placeholder="Enter your Sold Value" label="Sold" />
                                </Box>
                                </AccordionDetails></Accordion>

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

                                    <TextField id="outlined-name" type="number" placeholder="Enter your Balance Value" label="Balance" />
                                    <TextField id="outlined-name" placeholder="Enter your Reference Value" label="Reference" />
                                    <TextField id="outlined-name" placeholder="Enter your C/O Value" label="C/O" />
                                    <TextField id="outlined-name" placeholder="Enter your C/T Value" label="C/T" />
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
    </div>
);
export default Protector;