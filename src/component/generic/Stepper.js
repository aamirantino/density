import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "How to Deposit Fund ?",
    description: `Transfer fund to wallet and convert it to USDT.`,
  },
  {
    label: "How to select trading pairs ?",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "How to select Side ?",
    description: `Try out different ad text to see what brings in the most customers,
             `,
  },
  {
    label: "How to Select Leverage ?",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Select Order Type",
    description: `Try out different ad text to see what brings in the most customers,
             `,
  },
  {
    label: "Enter the size ",
    description: `Try out different ad text to see what brings in the most customers,
             `,
  },
  {
    label: "Submit Order ",
    description: `Try out different ad text to see what brings in the most customers,
             `,
  },
  {
    label: "How to Close Position ?",
    description: `Try out different ad text to see what brings in the most customers,
             `,
  },
  {
    label: "Check Trade History ?",
    description: `Try out different ad text to see what brings in the most customers,
             `,
  },
];

export default function VerticalStepper({ activeStep }) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step
            key={step.label}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#1F1F24", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "#1F1F24", // Just text label (COMPLETED)
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "secondary.main", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "common.white", // Just text label (ACTIVE)
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "#fff", // circle's number (ACTIVE)
              },
            }}
          >
            <StepLabel
              optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}></Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 1 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )} */}
    </Box>
  );
}
