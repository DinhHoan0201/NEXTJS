import { Box } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "796px",
        backgroundImage: `url("./images/bannerbg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    ></Box>
  );
};

export default Banner;
