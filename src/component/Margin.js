import {
  Box,
  Button,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Margin() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#1F1F24", pt: 3, pl: 3, pr: 3 }}>
        <Typography variant="h3" sx={{ pb: 2.5 }}>
          Adjust Margin
        </Typography>
        <Box display="flex" sx={{ border: "1px solid #959595" }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            sx={{ color: "#fff", borderRight: "1px solid #959595" }}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Add</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField
            sx={{ width: "100%", input: { color: "#B3B3B3" } }}
            placeholder="000000000"
          />
        </Box>
        <Box display="flex" justifyContent="right">
          <Typography variant="h6">Available : ₹5000 </Typography>
        </Box>
        <Box sx={{ mt: 3, pb: 4 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">
              Margin used for BTCUSDT Perpetual
            </Typography>
            <Typography variant="h6">2.082</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <Typography variant="h6">Maximum allowed margin</Typography>
            <Typography variant="h6">8.07</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <Typography variant="h6">
              Estimated Liquidation Price after Margin Modification
            </Typography>
            <Typography variant="h6">116.32</Typography>
          </Box>
        </Box>
      </Box>
      <DialogActions sx={{ backgroundColor: "#2C2C34" }}>
        <Button
          sx={{ backgroundColor: "transparent", border: "1px solid #909090" }}
          variant="outlined"
          onClick={handleClose}
          autoFocus
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          sx={{ backgroundColor: "#fff", color: "#2C2C34" }}
          onClick={handleClose}
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
}
