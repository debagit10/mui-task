import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pellentesque neque eu sodales congue. Nullam interdum tellus ac erat
        laoreet feugiat. Quisque tincidunt finibus quam quis commodo. Phasellus
        at nisl ut justo posuere consequat. Sed faucibus varius est non
        ullamcorper.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pellentesque neque eu sodales congue. Nullam interdum tellus ac erat
        laoreet feugiat. Quisque tincidunt finibus quam quis commodo. Phasellus
        at nisl ut justo posuere consequat. Sed faucibus varius est non
        ullamcorper.
      </Typography>
    </div>
  );
};

export default MuiTypography;
