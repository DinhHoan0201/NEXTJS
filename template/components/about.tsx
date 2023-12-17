import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Card, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { projectStyles } from "./project";
export const aboutStyles = {
  tittle: {
    fontFamily: " League Spartan",
    fontWeight: "700",
    width: "58%",
    pt: "80px",
  },
  content: {
    fontFamily: "Roboto",
    fontWieght: "400",
    width: "58%",
  },
};
const About = () => {
  return (
    <>
      <Container>
        <Stack direction="column" alignItems="center">
          <Typography variant="h4" sx={aboutStyles.tittle}>
            My Background
          </Typography>
          <Box sx={aboutStyles.content}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </Typography>
            <Typography variant="body1" gutterBottom>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </Typography>
          </Box>
        </Stack>

        <Stack direction="column" alignItems="center">
          <Typography sx={aboutStyles.tittle} variant="h4">
            My Hobbies and Interests
          </Typography>
          <Box sx={aboutStyles.content}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.{" "}
            </Typography>
            <Typography variant="body1">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{ padding: "80px 0px 80px 0px " }}
          direction="row"
          justifyContent="center"
        >
          <Button startIcon={<ArrowRightAltIcon />} sx={projectStyles.button_}>
            Contact me
          </Button>
        </Stack>
      </Container>
    </>
  );
};
export default About;
