import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function Refund() {

    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Box sx={{ flexGrow: 1, borderBottom: '5px solid #8A2BE2' }}>
                <Grid container spacing={0}>
                    <Box sx={{
                        flexGrow: 1,
                        mb: 3,
                        p: 1,
                        // bgcolor: '#cfe8fc',
                        // boxShadow: 2,
                        // border: 0.5,
                        // borderColor: 'primary.light',

                    }}>
                        <div>
                            <Typography variant="h1"
                                sx={{
                                    color: '#8A2BE2',

                                    textAlign: 'center',
                                    '&:hover': {
                                        color: '#8A2BE2',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            >
                                <b> Void & Refunds </b>  </Typography>
                        </div>
                    </Box>
                    <Box sx={{ float: 'right', '& button': { m: 1 } }}> <div>
                    <LoadingButton
                                        size="large"
                                        // onClick={handleSubmitClick}
                                        endIcon={<SendIcon />}
                                        // loadin={submitLoading}
                                        loadingPosition="end"
                                        variant="contained"
                                        color="secondary"
                                    >
                                        SMS
                                    </LoadingButton>
                        <Button color="error" variant="contained" size="large">
                            Exit
                        </Button>
                    </div>
                    </Box>
                </Grid>

                {/* ................................header end................................            */}
                <Grid Grid container spacing={0} >
                    <Grid item>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '12ch' }, }} >
                            <TextField id="outlined-name" label="Refund No." />
                        </Box>
                    </Grid>
                    {/* ............................start............................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '13ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="Status" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '8ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="E.Tkt." placeholder="N" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="Ticket N0." />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="Ticket Type" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '8ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="BSP" placeholder="N" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '8ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="XO" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="Refund Type" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Receipt No." />
                        </Box>
                    </Grid>
                    {/* ..................................date......................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}

                        >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Stock Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>


                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '10ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="Sales Person" />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '10ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="Calculate Comm." placeholder='N' />
                        </Box>

                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '8ch' },
                            }}

                        >
                            <TextField id="outlined-name" label="%" />
                        </Box>

                    </Grid>
                    {/* ............................one done............................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Airline/Agent" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '30ch' },
                            }}>
                            <TextField id="outlined-name" label="Airline/Agent Name" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '20ch' },
                            }}>
                            <TextField id="outlined-name" label="Conjuction Tkt no." />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="XO NUMBER" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Type" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '18ch' },
                            }}>
                            <TextField id="outlined-name" label="PSA 1.5% (PIA)" placeholder='N' />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}

                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Route" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '40ch' },
                            }}>
                            <TextField id="outlined-name" label="Category" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Client Code" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch' },
                            }}>
                            <TextField id="outlined-name" label="Client Name" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '43ch' },
                            }}>
                            <TextField id="outlined-name" label="Passenger Name & Information" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '45ch' },
                            }}>
                            <TextField id="outlined-name" label="Sector" />
                        </Box>
                    </Grid>
                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Class" />
                        </Box>
                    </Grid>

                    {/* ........................................................................................               */}
                    <Grid item >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '15ch' },
                            }}>
                            <TextField id="outlined-name" label="Coupon No." />
                        </Box>
                    </Grid>
                    {/* .....................................done..................................... */}

                    <Grid container spacing={1}>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '13ch' },
                                }}>
                                <TextField id="outlined-name" label="PIA Auto Tkt.no." />
                            </Box>
                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
                                }}>
                                <TextField id="outlined-name" label="Refund Claim No." />
                            </Box>
                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '10ch' },
                                }}>
                                <TextField id="outlined-name" label="PNR.#" />
                            </Box>
                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
                                }}>
                                <TextField id="outlined-name" label="Inv.No." />
                            </Box>
                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
                                }}

                            >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Inv.Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>


                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
                                }}

                            >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Validation Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>


                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '20ch' },
                                }}>
                                <TextField id="outlined-name" label="Airline" placeholder='ACCOUNTS PAYABLE' />
                            </Box>
                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
                                }}>
                                <TextField id="outlined-name" label="Main Segregation" type="number" placeholder='0' />
                            </Box>
                        </Grid>
                        {/* ........................................................................................               */}
                        <Grid item >
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
                                }}>
                                <TextField id="outlined-name" label="Sub Segregation" type="number" placeholder='0' />
                            </Box>
                        </Grid>
                    </Grid>
                    {/* ..............................dn..........................  */}


                </Grid >
            </Box >

            {/* ..................part 2.............................................................................. */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="IATA Fare" />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="Mkt.Fare" />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="Other Fare" />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="Soto Fare" />
                            </Box>
                        </Grid>
                        
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="YD/SF/FTT" />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="PK/YR" />
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="FED/RG/CVT" />
                            </Box>
                        </Grid>
                       

                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="XZ/JO" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="W.H.AIRLINE" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="W.H.CLIENT" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="YQ" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="PB" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="OTHER" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Tot.Tax" />
                        </Box>
                        
                    </Grid>

                    <Grid item xs={2}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Comm.%" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Com.Amt" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Extra %" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Extra Com." />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Comm.Adj." />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Total Com." />
                        </Box>
                    </Grid>

                    <Grid item xs={2}>
                    <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="SP/YI" />
                            </Box>
                        </Grid>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Service Chrgs %" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Serv. Amount" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Adv. WHT 6%" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Svc/Ins." />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Transfer A/C" />
                        </Box>
                        <Grid item>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                                <TextField id="outlined-name" label="CED" />
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid item xs={2}>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Fare+Taxes" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Disc.%" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Disc.Amt" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Disc.Adjust" />
                        </Box>

                        <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} >
                            <TextField id="outlined-name" label="Com after KB " placeholder='N' />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="K.B. Airline" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="K.B. Cust" />
                        </Box>
                    </Grid>

                    <Grid item xs={2}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Tot.Sp" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Tot.Income" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="Payment" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="GDS:" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Rtd Pmt."
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                <Item><Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <TextField id="outlined-name" label="Cancel Charges" />
                </Box></Item>
                <Item><Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Sale Report Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box></Item>
                
            </Stack>



            <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                <Item><Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <TextField id="outlined-name" label="Service Charges" />
                </Box></Item>
                <Item><Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Refund Void Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box></Item>
                {/* .............................................. */}
                <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Airline Recievable" />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Payable to Client" />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Cvc./Ins." />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Ticket Value" />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Recievable" />
                    </Box>
                </Stack>

                <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Airline Recievable" />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Payable to Client" />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Cvc./Ins." />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Ticket Value" />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                        <TextField id="outlined-name" label="Recievable" />
                    </Box>
                </Stack>
            </Stack>
            {/* ....................................................   */}

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
                            <TextField id="outlined-name" label="" />
                        </Box>
                    </Stack>

                </Grid>
                {/* ..........................................copy................... */}
                <Grid item xs={6}>
                    <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="fc" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="F/c Payable" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                            <TextField id="outlined-name" label="F/c Recievable" />
                        </Box>
                    </Stack>
                </Grid>
                {/* .......................................... */}

            </Grid>
                            

            {/* ....................................................   */}
            <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <TextField id="outlined-name" label="" />
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label=""
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <TextField id="outlined-name" label="" />
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Refund Void Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>

            </Stack>

            <Grid container spacing={2}>
  
                <Grid item xs={4}>
                <Box sx={{ m:1, mb:2,
                            p: 1.5,
                            boxShadow: 2,
                            border: 0.5,
                            borderColor: '#8A2BE2',

                        }}>
                            <Typography variant="h3"
                                sx={{ textAlign:'center',
                                    color: '#8A2BE2',
                                    '&:hover': {
                                        color: '#8A2BE2',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            >
                                REFUND PENDING STATUS :</Typography>
                        </Box>
                </Grid>
                <Grid item xs={8}>
                <Box sx={{ m:1, mb:2,
                            p: 1.5,
                            boxShadow: 2,
                            border: 0.5,
                            borderColor: '#8A2BE2',

                        }}>
                             <Typography variant="h3"
                                sx={{ textAlign:'center',
                                    color: '#8A2BE2',
                                    '&:hover': {
                                        color: '#8A2BE2',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            >
                                Pending Client </Typography>
                                <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '10ch' }, }} >
                            <TextField id="outlined-name" label="" placeholder='N'/>
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
                            <TextField id="outlined-name" label="" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
                            <TextField id="outlined-name" label="" />
                        </Box>
                    </Stack>
                    <Typography variant="h3"
                                sx={{ textAlign:'center',
                                    color: '#8A2BE2',
                                    '&:hover': {
                                        color: '#8A2BE2',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            >
                                Pending Airline </Typography>
                    <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '10ch' }, }} >
                            <TextField id="outlined-name" label="" placeholder='N'/>
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
                            <TextField id="outlined-name" label="" />
                        </Box>
                        <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
                            <TextField id="outlined-name" label="" />
                        </Box>
                    </Stack>
                </Box>
                </Grid>
            </Grid>
         
            



            {/* ...........buttons..................      */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Item >
                            <Box sx={{ '& button': { m: 1 } }}> <div>
                                <Button variant="outlined"color="secondary" size="large">
                                    Add
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Edit
                                </Button>
                                <Button variant="outlined"color="secondary" size="large">
                                    Delete
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Search
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Others
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Detail Remarks
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    UP
                                </Button>
                                <Button variant="outlined"color="secondary" size="large">
                                    Down
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    upward
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    downward
                                </Button>
                                <Button variant="outlined" size="large"color="secondary">
                                    Change Ref.#
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Credit Note
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Excel Viewer
                                </Button>
                                <Button variant="outlined" color="secondary"size="large">
                                    Invoices Clear
                                </Button>
                            </div></Box>
                        </Item>

                    </Grid>
                </Grid>
            </Box>




        </div >
    )
}

export default Refund