import { Typography, TextField, Button } from "@mui/material";
import { Container, Stack, Box } from "@mui/system";
import React from "react";
import { sectionStyles } from "./mid";
import { projectStyles } from "./project";
export const contactStyles = {
  textField: {
    width: "100%",
    "& label": {
      fontFamily: "League Spartan",
      fontWeight: "700",
      color: "black",
      "& placeholder": {
        fontFamily: "Roboto",
        fontWeight: "400",
      },
    },
  },
};
const Contact = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            pb: "80px",
          }}
        >
          <Typography sx={sectionStyles.title} variant="h4">
            Contact me
          </Typography>
          <Stack
            sx={{ pt: "80px", pb: "60px" }}
            direction="row"
            justifyContent="space-between"
            spacing={14}
          >
            <TextField
              id="standard-textarea"
              label="Name"
              placeholder="Your Name"
              variant="standard"
              sx={contactStyles.textField}
            />
            <TextField
              id="standard-textarea"
              label="Email"
              placeholder="email@example.com"
              variant="standard"
              sx={contactStyles.textField}
            />
          </Stack>
          <TextField
            id="standard-textarea"
            label="Nachricht"
            placeholder="Hello, my name is . . ."
            variant="standard"
            sx={contactStyles.textField}
          />
          <Stack direction="row" justifyContent="center" sx={{ pt: "80px" }}>
            <Button sx={projectStyles.button_}>Send Message</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
