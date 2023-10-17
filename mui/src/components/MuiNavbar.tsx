import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import App from "../App";

const MuiNavbar = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Feautres</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-control={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu
            id="resources-menu"
            open={open}
            anchorEl={anchor}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MuiNavbar;
