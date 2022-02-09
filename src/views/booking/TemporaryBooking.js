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

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});

const TemporaryBooking = () => {


    // ..................loading..................................

    const [submitLoading, setSubmitLoading] = React.useState(false);

    const handleSubmitClick = () => {
        setSubmitLoading(true);
        console.log("loading");
        console.log("submitting");

        setSubmitLoading(false);

    }


    const [resetLoading, setResetLoading] = React.useState(false);

    const handleResetClick = () => {
        setResetLoading(true);
        console.log("Reset data");
        setResetLoading(false);

    }


    // ..........field..............
    const [paxName, setPaxName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [pnr, setPnr ] = React.useState('');
    const [gsd, setGsd] = React.useState('');
    const [carrer, setCarrer] = React.useState('');
    const [fare, setFare] = React.useState('');
    const [sold, setSold] = React.useState('');
    const [value, setValue] = React.useState(null);
    //   ..............................................

    //    ......................HandlleSubmit....................... 
    const handleSubmit = (e) => {
        console.log("submit btn");
        e.preventDefualt()

        if (paxName && contact && pnr && gsd && carrer && fare && sold && value) {
            console.log(paxName ,contact , pnr , gsd , carrer ,fare ,sold , value);
        }
    }

    return <div>
        <Container maxWidth="lg">
            <Box xs={{ mt: 5 }}>
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

                            <Typography variant="h1"
                                sx={{
                                    m: 1, mb: 3,
                                    color: 'primary.dark',
                                    textAlign: 'center',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],

                                    },
                                }}
                            >
                                Temporary Booking </Typography>

                            <Box sx={{
                                mb: 3,
                                p: 1.5,
                                boxShadow: 2,
                                border: 0.5,
                                borderColor: 'primary.light',

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
                                    <SendIcon />
                                    Basic information</Typography>
                            </Box>

                            {/* ..............................Fields........................................ */}
                            <form noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                                >
                            <Box

                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, mb: 2, width: '47ch' },
                                    m: 1, mb: 3, mt: 2,
                                    borderLeft: '2px solid #3183ff',
                                    borderBottom: '1px solid #3183ff',
                                    backgroundColor: '#cfe8fc',
                                    boxShadow: 1,
                                    color: 'primary.main',
                                }}

                            >
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Pax Name"
                                    placeholder=" Enter your Pax Name"
                                    value={paxName}
                                    onChange={(e) => setPaxName(e.target.value)}

                                />
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Contact"
                                    placeholder=" Enter your Phone Number"
                                    type="number"
                                    onChange={(e) => setContact(e.target.value)}
                                />
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="PNR"
                                    placeholder=" Enter your PNR"
                                    type="number"
                                    onChange={(e) => setPnr(e.target.value)}
                                />
                            </Box>

                            <Box
                             
                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, width: '47ch' },
                                    m: 1, mb: 3, mt: 2,
                                    borderLeft: '2px solid #3183ff',
                                    borderBottom: '1px solid #3183ff',
                                    boxShadow: 1,
                                    backgroundColor: '#cfe8fc',
                                    // border: 1,
                                    borderColor: 'primary.light',
                                    '& .MuiDataGrid-cell:hover': {
                                        color: 'primary.main',
                                        backgroundColor: '#cfe8fc',
                                    }

                                }}
                              
                            >
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="GSD PNR"
                                    placeholder="Enter your GSD PNR"
                                    type="number"
                                    onChange={(e) => setGsd(e.target.value)}
                                />
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Carrer"
                                    placeholder="Enter your Carrer"
                                    // type="number"
                                    onChange={(e) => setCarrer(e.target.value)}

                                />
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Total Fare"
                                    placeholder="Enter your Total Fare"
                                    type="number"
                                    onChange={(e) => setFare(e.target.value)}
                                />
                            </Box>

                            <Box
                            
                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, width: '72ch' },
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

                                }}
                              
                            >
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Sold"
                                    placeholder="Enter your Value"
                                    type="number"
                                    onChange={(e) => setSold(e.target.value)}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        required
                                        label="Time Limit"
                                        placeholder="Enter your Date"
                                        // type="number"
                                        // onChange={(e) => setTime(e.target.value)}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                {/* .............................buttons.................................................. */}

                            </Box>
                            <Box sx={{
                                float: 'right',
                                '& > button': { m: 2 }
                            }}>

                                <LoadingButton
                                    size="large"
                                    // onClick={handleSubmitClick}
                                    endIcon={<SendIcon />}
                                    loading={submitLoading}
                                    loadingPosition="end"
                                    variant="contained"
                                >
                                    Submit
                                </LoadingButton>
                                <LoadingButton
                                    size="large"
                                    color="secondary"
                                    // onClick={handleResetClick}
                                    loading={resetLoading}
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
              
                {/* .............................................Table...............................         */}
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
                        <div style={{ height: 250, width: '100%' }}>
                            <DataGrid
                                columns={[{ field: 'Pax_Name', width: 150 },
                                { field: 'Contact', width: 150 },
                                { field: 'PNR', width: 150 },
                                { field: 'GSD_PNR', width: 150 },
                                { field: 'Carrer', width: 150 },
                                { field: 'TotalFare', width: 150 },
                                { field: 'Sold', width: 150 },
                                { field: 'TimeLimit', width: 150 }]}
                                rows={rows}
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

export default TemporaryBooking;