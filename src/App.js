import React from "react";
import { Box } from "@mui/material";
import "./App.css";

import CarouselPage from "./Component/CarouselPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Box className="app-background">
      <CarouselPage></CarouselPage>
    </Box>
  );
}

export default App;
