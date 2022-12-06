import {
  Box,
  Button,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function Withdraw() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#1F1F24", pt: 3, pl: 3, pr: 3 }}>
        <Typography variant="h3" sx={{ mb: 2.5 }}>
          Withdraw INR
        </Typography>
        <Box>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Enter Withdraw Amount
          </Typography>
          <TextField
            sx={{ width: "100%", border: "1px solid #959595",input: { color: '#B3B3B3' } }}
            placeholder="0000000"
          />
        </Box>
        <Box display="flex" justifyContent="right">
          <Typography variant="h6">Available : ₹5000 </Typography>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ pt: 2 }}>
            Bank Details
          </Typography>
          <Box display="flex" justifyContent="space-between" sx={{ pt: 1.75 }}>
            <Typography variant="h6">Account Number</Typography>
            <Typography variant="h6">PAGARPAY INDIA PRIVATE LIMITED</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ pb: 1.5 }}>
            <Typography variant="h6">Account IFSC Code</Typography>
            <Typography variant="h6">0937480SBXHBA2E12E</Typography>
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
          Deposit
        </Button>
      </DialogActions>
    </>
  );
}