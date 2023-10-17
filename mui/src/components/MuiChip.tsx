import React from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
    </Stack>
  );
};

export default MuiChip;
