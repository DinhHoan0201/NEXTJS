import { Box } from "@mui/material";
import React from "react";
import Header from "./header";
import Banner from "./banner";
import Banner1 from "./banner1";
import Banner2 from "./banner2";
import Banner3 from "./banner3";
const Landingpage = () => {
  return (
    <>
      <Box sx={{ background: "#101010" }}>
        <Header />
        <Banner />
        <Banner1 />
        <Banner2 />
        <Banner3 />
      </Box>
    </>
  );
};

export default Landingpage;
