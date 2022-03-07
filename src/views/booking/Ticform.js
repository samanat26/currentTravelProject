import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const Ticform = () => {

    const [dvalue, setValued] = React.useState(null);
    const [pvalue, setValuep] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const [tvalue, setValuet] = React.useState(null);
    const [rvalue, setValuer] = React.useState(null);

  return (
    <div>
                      {/* .......................form............................ */}

                      <form noValidate
                        autoComplete="off"
                    >
                       

                               <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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
                                    />
                                    </Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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

                           
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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

                              
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2',
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
                  
                               
                                <Box
                                    sx={{
                                        '& > :not(style)': { p: 1, m: 1, mb: 2, width: '33ch' },
                                        m: 1, mb: 3, mt: 2,
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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
                                        boxShadow: 1,
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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
                                backgroundColor: '#CBC3E3',
                                borderLeft: '2px solid #8A2BE2',
                               borderBottom: '2px solid #8A2BE2',
                                borderColor: '#8A2BE2', 
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
  )
}

export default Ticform