/* eslint-disable*/
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const Pform = () => {
  return (
    <div>
        

        <form noValidate
                        autoComplete="off"
                    >
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
                            <TextField id="outlined-name" label="Transition ID" type="number" placeholder="Enter your ID" />
                            <TextField id="outlined-name" label="Pax Name" placeholder="Enter your PaxName" />
                            <TextField id="outlined-name" label="Contact" type="number" placeholder="Enter your Number" />
                            <TextField id="outlined-name" label="Country" placeholder="Enter your Country" />
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
                            <TextField id="outlined-name" placeholder="Enter your Type" label="Type" />
                            <TextField id="outlined-name" type="number" placeholder="Enter your Cost" label="Our Cost" />
                            <TextField id="outlined-name" type="number" placeholder="Enter your Deposit Value" label="Deposit" />
                            <TextField id="outlined-name" type="number" placeholder="Enter your Sold Value" label="Sold" />
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

                            <TextField id="outlined-name" type="number" placeholder="Enter your Balance Value" label="Balance" />
                            <TextField id="outlined-name" placeholder="Enter your Reference Value" label="Reference" />
                            <TextField id="outlined-name" placeholder="Enter your C/O Value" label="C/O" />
                            <TextField id="outlined-name" placeholder="Enter your C/T Value" label="C/T" />
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

export default Pform