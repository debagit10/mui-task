import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="name" />
        <TextField label="name" variant="standard" />
        <TextField label="name" variant="filled" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="small secondary" color="secondary" size="small" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Email address"
          required
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
        />
        <TextField
          type="password"
          label="Password"
          required
          helperText="Do not share your password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email address"
          required
          type="email"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
