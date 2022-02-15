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
import oRows from "./sampletb";
import { IconUsers } from '@tabler/icons';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';


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
    //   ..............................................y

    const icons = {
        IconUsers
    };

    //    ......................HandlleSubmit....................... 
    const handleSubmit = (e) => {
       
        e.preventDefualt()
        console.log("submit btn");

        if (paxName && contact && pnr && gsd && carrer && fare && sold && value) {
            console.log(paxName ,contact , pnr , gsd , carrer ,fare ,sold , value);
        }
    }

    return <div>
        <Container maxWidth="lg">
 
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
                                        textAlign:'center',
                                        '&:hover': {
                                            color: 'primary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                >
                                     Temporary Booking   </Typography>
                            </Box>

                            {/* ..............................Fields........................................ */}
                            <form noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
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
                                width:'100%',
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
                                    '& > :not(style)': { p: 1, m: 1, mb: 2, width: '45ch' },
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
                                  value={contact}
                                  onChange={(e) => setContact(e.target.value)}
                                                 
                                />
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="PNR"
                                    placeholder=" Enter your PNR"
                                    type="number"
                                    value={pnr}
                                    onChange={(e) => setPnr(e.target.value)}
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
                                width:'100%',
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
                                    Fare</Typography>
                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>

                            <Box
                             
                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, width: '45ch' },
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
                                    value={gsd}
                                    onChange={(e) => setGsd(e.target.value)}
                                />
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Carrer"
                                    value={carrer}
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
                                    value={fare}
                                    onChange={(e) => setFare(e.target.value)}
                                />
                             </Box>
                             <Box
                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, width: '67ch' },
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
                                    required
                                    id="outlined-name"
                                    label="Sold"
                                    placeholder="Enter your Value"
                                    type="number"
                                    value={sold}
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
                                rows={oRows}
                                
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
        


        </Container>
    </div>;
}

export default TemporaryBooking;