import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/internals/models";

const MuiDateRange = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({ value });
  return (
    <Box width="500px">
      <DateRangePicker
        slotProps={{
          textField: ({ position }) => ({
            label: position == "start" ? "Check-in" : "Check-out",
          }),
        }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  );
};

export default MuiDateRange;
