import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({
    selectedDateTime,
  });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date picker"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />

      <TimePicker
        label="Time picker"
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      />
      <DateTimePicker
        label="Date Time picker"
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};

export default MuiPicker;
