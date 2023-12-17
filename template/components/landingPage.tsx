import React from "react";
import Hometemplate from "@/components/home";
import Mid from "@/components/mid";
import Project from "@/components/project";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";

const LandingPage = () => {
  return (
    <>
      <Box>
        <Box sx={{ backgroundColor: "black" }}>
          <Hometemplate />
        </Box>
        <Mid />
        <Project />
        <About />
        <Contact />
        <Box sx={{ backgroundColor: "black" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
