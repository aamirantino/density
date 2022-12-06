import React from 'react'
import VerticalStepper from './generic/Stepper'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { Typography } from '@mui/material';
export default function Onboarding() {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Onboard
      </Button>
      <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.light}
    width="100%"
    height= "500px"
    interval="D"
    timezone="exchange"
    style="1"
    toolbar_bg="#f1f3f6"
    withdateranges={true}
    hide_side_toolbar={false}
    allow_symbol_change={true}
    save_image={false}
    show_popup_button={true}
    popup_width={1000}
    popup_height={650}
    locale="in"
  />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography variant='h3' sx={{color:"#000", p: 2, pb:0}} id="alert-dialog-title">
          {"How to Get Started ?"}
        </Typography>
        <DialogContent sx={{width:600}}>
        <VerticalStepper activeStep={activeStep}  />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#F2F2F2" }}>
        <Button style={{ backgroundColor: 'transparent',border:'1px solid #909090',color:'#2C2C34' }} variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
          Back
        </Button>
        <Button
          variant="outlined"
          style={{ backgroundColor: '#fff',color:"#2C2C34",border:'1px solid #909090' }}
          onClick={handleNext}
        >
          Next
        </Button>
      </DialogActions>
      </Dialog>
      
    </div>
  );
}