import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl id="job-experience-group-label">
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio />}
            label="0-2 years"
            value="0-2 years"
          />
          <FormControlLabel
            control={<Radio />}
            label="3-5 years"
            value="3-5 years"
          />
          <FormControlLabel
            control={<Radio />}
            label="6-10 years"
            value="6-10 years"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
