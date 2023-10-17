import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

const MuiProgress = () => {
  return (
    <Stack direction="row" alignItems="center" alignContent="center">
      <AdjustIcon />
      <LinearProgress
        color="primary"
        variant="determinate"
        value={100}
        sx={{ width: "100px" }}
      />
      <AdjustIcon />
      <LinearProgress
        color="primary"
        variant="determinate"
        value={100}
        sx={{ width: "100px" }}
      />
      <AdjustIcon />
    </Stack>
  );
};

export default MuiProgress;
