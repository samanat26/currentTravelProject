import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function JournalVoch() {

  const [value, setValue] = React.useState(new Date());
  const [checked, setChecked] = React.useState(true);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Container maxWidth="lg">

        <Box sx={{
          float: 'right',
          '& > button': { m: 1 }
        }}>
          <Button color="error" variant="contained" size="large">
            Exit
          </Button>
        </Box>
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
          Journal Voucher</Typography>
        </Box>
        {/* .............................header end.......................  */}


        <Box sx={{ m: 1, flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" sx={{ m: 1 }} spacing={1}>
                <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
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
            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        name="gilad" />
                    }
                    label="Enable Foreign Currency (fc)"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        {/* ..................................................................... */}
        <div>forms</div>

        {/* ..................................................................... */}

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant="contained" size="large">
              ADD
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size="large">
              New Account
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
              <TextField id="outlined-name" label="Debit" />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
              <TextField id="outlined-name" label="Credit" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
              <TextField id="outlined-name" label="" />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
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
          </Grid>
        </Grid>

        {/* ............................................................ */}

        <Box sx={{
          mb: 3,
          p: 1.5,
          boxShadow: 2,
          border: 0.5,
          borderColor: 'primary.light',

        }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <Item>
              <Typography variant="h4"
            sx={{
              color: 'primary.dark',
              textAlign: 'center',
              '&:hover': {
                color: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            Journal Voucher :</Typography>  
            </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Typography variant="h5"
            sx={{
              color: 'primary.dark',
              textAlign: 'left',
              '&:hover': {
                color: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            This is adjustment voucher any account can be debit or credit , depends on entry, There should be double entry and debit and credit total must be equal. Cash Code is not allow in this voucher </Typography>
            </Item>
            </Grid>
          </Grid>
       </Box>


      </Container>
    </div>
  )
}
