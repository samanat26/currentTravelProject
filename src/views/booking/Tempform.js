import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import oRows from "./sampletb";
import { IconUsers } from '@tabler/icons';

const Tempform = () => {

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


    //    ......................HandlleSubmit....................... 
    const handleSubmit = (e) => {
       
        e.preventDefualt()
        console.log("submit btn"); 
    }

  return (
    <div>
                   {/* ..............................Fields........................................ */}
                   <form noValidate
                                autoComplete="off">
                                
                            <Box
                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, mb: 2, width: '45ch' },
                                    m: 1, mb: 3, mt: 2,
                                    boxShadow: 1,
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2', 
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
                         
                             <Box
                                sx={{
                                    '& > :not(style)': { p: 1, m: 1, width: '67ch' },
                                    m: 1, mb: 3, mt: 2,
                                    boxShadow: 1,
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2', 
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
  )
}

export default Tempform