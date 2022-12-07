import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
      secondary: "#fcfcfc",
    },
    primary: {
      main: "#1F1F24",
      contrastText: "#ffffff",
    },
    text: {
      primary: "rgba(0, 19, 37, 0.92)",
      secondary: "rgba(0, 0, 0, 0.72)",
    },
    secondary: {
      main: "rgba(0, 19, 37, 0.64)",
    },
  },
  typography: {
    fontFamily: [
      "'Inter', sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
    ].join(","),

    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      letterSpacing: "-0.24px",
      lineHeight: "2.5rem",
      color: "#fff",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      letterSpacing: "-0.24px",
      lineHeight: "2.25rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "-0.06px",
      lineHeight: "1.75rem",
      color: "#fff",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
      letterSpacing: "-0.06px",
      lineHeight: "1.5rem",
      color: "#fff",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1rem",
      letterSpacing: "-0.05px",
      lineHeight: "24px",
      color: "#B3B3B3",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      letterSpacing: "-0.05px",
      lineHeight: "1.5rem",
      color: "#B3B3B3",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1.5rem",
    },
    overline: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          backgroundColor: "#2C2C34",
          width: "194px",
          color: "#fff",
          textTransform: "capitalize",
        },
        outlined: {
          border: "1px solid rgba(0, 19, 37, 0.16)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-input": {
            paddingTop: "10px",
            background: "#F3F4F5",
            width: "100%",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "rgba(101, 90, 214, 0.08)",
          border: "1px solid #1F1F24",
          color: "#1F1F24",
          "& .MuiChip-deleteIcon": {
            color: "#1F1F24",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "rgba(0, 19, 37, 0.64)",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "#f44336",
            fontWeight: 500,
          },
        },
      },
    },
  },
});

export default theme;
