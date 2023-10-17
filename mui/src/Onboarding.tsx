import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Box,
  Stack,
  Typography,
  LinearProgress,
  Grid,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import Category from "./sections/Category.tsx";
import Vendor from "./sections/Vendor.tsx";
import Review from "./sections/Review.tsx";

import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Onboarding = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const pages = ["Category", "Vendor Information", "Review"];
  return (
    <>
      <Button onClick={() => setOpen(true)}>Onboarding</Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        fullWidth
      >
        <DialogTitle id="dialog-title">
          {index == 0 && (
            <Typography variant="h6" textAlign="center">
              New Onboarding Request
            </Typography>
          )}
          {index == 1 && (
            <Typography variant="h6" textAlign="center">
              Vendor Onboarding
            </Typography>
          )}
          {index == 2 && (
            <Typography variant="h6" textAlign="center">
              Review
            </Typography>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={index} alternativeLabel>
                {pages.map((page) => (
                  <Step>
                    <StepLabel>{page}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {index == 0 && <Category />}
              {index == 1 && <Vendor />}
              {index == 2 && <Review />}
            </Box>
          </DialogContentText>
        </DialogContent>

        {index == 2 ? (
          <Button
            onClick={() => (setOpen(false), window.location.reload())}
            variant="contained"
            sx={{ margin: 2 }}
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={() => setIndex(index + 1)}
            variant="contained"
            sx={{ margin: 2 }}
          >
            Next
          </Button>
        )}
      </Dialog>
    </>
  );
};

export default Onboarding;
