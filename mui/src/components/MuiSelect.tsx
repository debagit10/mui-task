import React, { useState } from "react";
import { Box, TextField, MenuItem, Menu } from "@mui/material";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        helperText="Please select your country"
        color="secondary"
        error
      >
        <MenuItem value="NG">Nigeria</MenuItem>
        <MenuItem value="ARG">Argentina</MenuItem>
        <MenuItem value="ENG">England</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
