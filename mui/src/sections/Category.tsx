import React, { useState } from "react";
import { TextField, Menu, MenuItem, Box, Stack, Grid } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";

const Category = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCategories(typeof value === "string" ? value.split(",") : value);
  };
  const handleSubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSubCategories(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Grid container my={4} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={6}>
        <TextField
          select
          value={categories}
          size="small"
          label="Categories"
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value="one">Category 1</MenuItem>
          <MenuItem value="two">Category 2</MenuItem>
          <MenuItem value="three">Category 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          value={subCategories}
          size="small"
          fullWidth
          onChange={handleSubChange}
        >
          <MenuItem value="sub-one">Sub-category 1</MenuItem>
          <MenuItem value="sub-two">Sub-category 2</MenuItem>
          <MenuItem value="sub-three">Sub-category 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <DatePicker
          label="Expiring date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField placeholder="Write your message" size="medium" fullWidth />
      </Grid>
    </Grid>
  );
};

export default Category;
