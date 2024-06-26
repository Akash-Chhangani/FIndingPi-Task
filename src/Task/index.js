import React from "react";
import { Box, Typography } from "@mui/material";

const Task = () => {
  return (
    <Box className="quote-box">
      <Typography className="quote-text">
        "You can't cross the sea merely by standing and staring at the water."
      </Typography>
      <Typography className="quote-author">Rabindranath Tagore</Typography>
    </Box>
  );
};

export default Task;
