import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, TextField, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
export default function Deposit() {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        border: "1px solid rgba(192,23,44,0.5)",
        padding: "20px",
        backgroundColor: "#1F1F24",
      }}
    >
      <Typography variant="h3" id="alert-dialog-title" sx={{ mb: 2 }}>
        {"Deposit INR"}
      </Typography>

      <Typography variant="h5" id="alert-dialog-description" sx={{ mb: 1 }}>
        Registered Account Number
      </Typography>
      <TextField
         sx={{ width: "100%", border: "1px solid #959595",input: { color: '#B3B3B3' } }}
        value={name}
        placeholder="Enter Account Number"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Typography variant="h5" sx={{ mt: 1.75, mb: 1 }}>
        Enter Deposit Amount
      </Typography>
      <TextField
         sx={{ width: "100%", border: "1px solid #959595",input: { color: '#B3B3B3' } }}
        value={name}
        placeholder="Enter Amount"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Typography variant="h4" sx={{ mt: 9, mb: 1.75 }}>
        Transfer Money to this Bank Account
      </Typography>
      <div>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Baneficiary Entity{" "}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            PAGARPAY INDIA PRIVATE LIMITED{" "}
            <ContentCopyIcon style={{ fontSize: "16px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6">Baneficiary Account Number</Typography>
          <Typography variant="h6">
            0937480SBXHBA2E12E <ContentCopyIcon style={{ fontSize: "16px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6">Baneficiary IFSC Number </Typography>
          <Typography variant="h6">
            ESFB0003031 <ContentCopyIcon style={{ fontSize: "16px" }} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6">Bank Account Type</Typography>
          <Typography variant="h6">
            8924789740 <ContentCopyIcon sx={{ fontSize: "16px" }} />
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ mt: 5 }}>
          <ErrorOutlineIcon sx={{ fontSize: "16px" }} />
          The amount should be deposited with above bank account only. Amount
          coming from any other bank account would be refunded back.
        </Typography>
        <Box display="flex" sx={{ pt: 2, pb: 8 }}>
          <input type="checkBox" />

          <Typography variant="h5">Transfer to USDT Wallet directly</Typography>
        </Box>
      </div>

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
    </Box>
  );
}
