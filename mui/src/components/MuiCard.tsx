import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="Unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography color="text.secondary" variant="body2">
            React is Javascript library for building user interfaces. React can
            be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
