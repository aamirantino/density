import { Box, Button, DialogActions, TextField, Typography } from "@mui/material";
import React from "react";

export default function Margin() {

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#1F1F24", pt: 3, pl: 3, pr: 3 }}>
        <Typography variant="h3" sx={{ pb: 2.5 }}>
          Adjust Margin
        </Typography>
        <Box>
          <TextField
            sx={{ width: "100%", border: "1px solid #959595",input: { color: '#B3B3B3' } }}
            placeholder="000000000"
          />
        </Box>
        <Box display="flex" justifyContent="right" >
          <Typography variant="h6">Available : ₹5000 </Typography>
        </Box>
        <Box sx={{mt:3, pb:4}}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">
              Margin used for BTCUSDT Perpetual
            </Typography>
            <Typography variant="h6">2.082</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
            <Typography variant="h6">Maximum allowed margin</Typography>
            <Typography variant="h6">8.07</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
            <Typography variant="h6">
              Estimated Liquidation Price after Margin Modification
            </Typography>
            <Typography variant="h6">116.32</Typography>
          </Box>
        </Box>
       
      </Box>
      <DialogActions sx={{ backgroundColor: "#2C2C34" }}>
        <Button style={{ backgroundColor: 'transparent',border:'1px solid #909090' }} variant="outlined" onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button
          variant="outlined"
          style={{ backgroundColor: '#fff',color:"#2C2C34" }}
          onClick={handleClose}
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
}
