import React from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Vendor = () => {
  return (
    <Grid container my={2} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>Company name</Typography>
        <TextField
          placeholder="Enter company's name"
          size="small"
          fullWidth
          type="name"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>Contact Person</Typography>
        <TextField
          placeholder="Entrer vendor's name"
          size="small"
          fullWidth
          type="name"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
        <TextField
          type="email"
          placeholder="person@example.com"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>Phone</Typography>
        <TextField
          type="phone"
          placeholder="09034770048"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>Primary Department</Typography>
        <TextField placeholder="logistics" size="small" fullWidth type="name" />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>
          Primary Servies(s) offered
        </Typography>
        <TextField
          placeholder="Maintenance"
          size="small"
          fullWidth
          type="name"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>Responsible officer</Typography>
        <TextField
          placeholder="Maintenance"
          size="small"
          fullWidth
          type="name"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: "bold" }}>ARAVO (TPRM) ID</Typography>
        <TextField
          placeholder="Maintenance"
          size="small"
          fullWidth
          type="number"
        />
      </Grid>
    </Grid>
  );
};

export default Vendor;
