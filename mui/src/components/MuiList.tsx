import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary=" List item 1" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary=" List item 2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary=" List item 3" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
