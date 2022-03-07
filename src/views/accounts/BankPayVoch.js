import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const columns = [
  { field: 'code', headerName: 'Code', width: 100 },
  { field: 'description', headerName: 'Description', width: 350 },
  {
    field: 'segregation',
    headerName: 'Segregation',
    // type: 'number',
    width: 100,
  },
  {
    field: 'recipt',
    headerName: 'Recipt #',
    width: 100,
    type: 'number',
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'cheque',
    headerName: 'Cheque No.',
    type: 'number',
    width: 100,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 100,
  },
  {
    field: 'postingDate',
    headerName: 'Posting Date',
    // type: 'number',
    width: 100,
  },
  {
    field: 'saleReport',
    headerName: 'In Sale Report',
    // type: 'number',
    width: 100,
  },
  {
    field: 'crNo',
    headerName: 'CR.No.',
    // type: 'number',
    width: 100,
  },
];

const rows = [
 
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #cfe8fc',
  borderRadius: '15px',  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BankPayVoch() {
  const [dvalue, setdValue] = React.useState(new Date());
  const [checked, setChecked] = React.useState(true);

  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
  // ...................modal.............................
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            Bank Payment Voucher</Typography>
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
                      value={dvalue}
                      onChange={(newValue) => {
                        setdValue(newValue);
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
        <div style={{ mb :4, height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>

        {/* ..................................................................... */}

        <Grid container spacing={2}  sx = {{m:1}}>
          <Grid item xs={3}>
          <Grid item xs={3}>
            <Button color="secondary" onClick={handleOpen} variant="contained" size="large">
              ADD
            </Button>

            {/* .............................modal..................... */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography variant="h3"
            sx={{
              color: '#8A2BE2',
              textAlign: 'center',
              '&:hover': {
                color: '#8A2BE2',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            Fill the Fields</Typography>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Stack direction="row" spacing={2}>
                  <TextField id="outlined-basic" label="Code" variant="outlined" />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                  <TextField  id="outlined-multiline-flexible" label="Description" multilinemaxRows={4} />
                  <TextField id="outlined-basic" label="Segregation" variant="outlined" />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                  <TextField id="outlined-basic" label="Recipt #" variant="outlined" />
                  <TextField id="outlined-basic" label="Cheque No." variant="outlined" />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" />
                  <TextField id="outlined-basic" label="Posting Date" variant="outlined" />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                  <TextField id="outlined-basic" label="In Sale Report" variant="outlined" />
                  <TextField id="outlined-basic" label="CR.No." variant="outlined" />
                  </Stack>
                  <Box sx={{ float: 'left', '& button': { m: 1 } }}> 
                  <LoadingButton color="secondary"
                                        size="large"
                                        // onClick={handleSubmitClick}
                                        endIcon={<SendIcon />}
                                        // loadin={submitLoading}
                                        loadingPosition="end"
                                        variant="contained"
                                    >
                                        Add
                                    </LoadingButton>
                </Box>
              </Box>
              </Box>
            </Modal>
            {/* .....................modal end............... */}
          </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary" size="large">
              New Account
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }} >
              <TextField id="outlined-name" label="" />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} >
              <TextField id="outlined-name" label="" />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
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
          borderColor: '#8A2BE2',

        }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h4"
                  sx={{
                    color: '#8A2BE2',
                    textAlign: 'center',
                    '&:hover': {
                      color: '#8A2BE2',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Bank Payment Voucher :</Typography>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Typography variant="h5"
                  sx={{
                    color: '#8A2BE2',
                    textAlign: 'left',
                    '&:hover': {
                      color: '#8A2BE2',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Enter the Account Code to whom you make the payment, if you do not know the code press tab key to search code from list.
                  When you save the voucher the bank account code will be automatically credit. Bank A/c Code is not allow in this voucher
                   </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>


      </Container>
    </div>
  )
}

export default BankPayVoch