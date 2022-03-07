import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Temptable from './Temptable';
import Tempform from './Tempform';
import Button from '@mui/material/Button';


const TemporaryBooking = () => {

    const [open, setOpen] = React.useState(true)


    return <div>
        <Container maxWidth="lg">
 
          
                        {/* .......................form............................ */}
                        <div>

                        <Box sx={{
                        float: 'right',
                        '& > button': { m: 1 }
                    }}>
                        <Button size="large"
                            onClick={() => setOpen(!open)}
                            open={open}
                            variant="contained"
                            color="secondary"
                        >
                            Add Contact
                        </Button>
                    </Box>
                <Box sx={{
                    mb: 3,
                    p: 1.5,
                    boxShadow: 2,
                    border: 0.5,
                    borderColor: '#8A2BE2',

                }}>
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
                                     Temporary Booking   </Typography>
                            </Box>

                 
                        </div>                                              
        
                        {open ? <Temptable /> : <Tempform />}

        </Container>
    </div>;
}

export default TemporaryBooking;