/* eslint-disable*/
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';


 const VForm = () => {

        // ...........date picker....................

        const [tvalue, setValuet] = React.useState(null);
        const [svalue, setValues] = React.useState(null);
        const [rvalue, setValuer] = React.useState(null);


  return (
    <div>
        <div>

{/* // .............................Form..................................                           */}
<form noValidate
    autoComplete="off">


    <div>

        <Box
            sx={{
                '& > :not(style)': { p: 1, m: 1, width: '45ch' },
                m: 1, mb: 3, mt: 2,
                boxShadow: 1,
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2', 
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
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2',              
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

    <div>
        <Box
            sx={{
                '& > :not(style)': { p: 1, m: 1, width: '33ch' },
                m: 1, mb: 3, mt: 2,
                boxShadow: 1,
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2',
                '& .MuiDataGrid-cell:hover': {
                    color: '#8A2BE2',
                    backgroundColor: '#CBC3E3',
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
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2',
                '& .MuiDataGrid-cell:hover': {
                    color: '#8A2BE2',
                    backgroundColor: '#CBC3E3',
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

    <div>
        <Box
            sx={{
                '& > :not(style)': { p: 1, m: 1, width: '33ch' },
                m: 1, mb: 3, mt: 2,
                boxShadow: 1,
                backgroundColor: '#CBC3E3',
                borderLeft: '2px solid #8A2BE2',
               borderBottom: '2px solid #8A2BE2',
                borderColor: '#8A2BE2',
                '& .MuiDataGrid-cell:hover': {
                    color: '#8A2BE2',
                    backgroundColor: '#CBC3E3',
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
    </div>
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


    </div>
  )
}
export default VForm ;
