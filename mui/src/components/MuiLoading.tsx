import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
const MuiLoading = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton loading variant="outlined" loadingIndicator="loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        startIcon={<SaveIcon />}
        loadingPosition="start"
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        startIcon={<SaveIcon />}
        loadingPosition="start"
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoading;
