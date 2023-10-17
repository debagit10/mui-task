import React, { useState } from "react";
import { Box, Switch, FormControlLabel } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;
