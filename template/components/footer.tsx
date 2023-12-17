import React from "react";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import { Button, Typography, Link, Grid } from "@mui/material";
import Image from "next/image";
const footerStyles = {
  _letter: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontWeight: "700",
  },
};
const Footer = () => {
  return (
    <>
      <Container>
        <Grid
          container
          sx={{ ...footerStyles._letter, p: "160px 0px 160px 0px" }}
        >
          <Grid item xs={6.5}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={4}>
                <Link href="#" underline="none" sx={footerStyles._letter}>
                  {"PROJECTS"}
                </Link>
                <Link href="#" underline="none" sx={footerStyles._letter}>
                  {"ABOUT"}
                </Link>
                <Link href="#" underline="none" sx={footerStyles._letter}>
                  {"CONTACT"}
                </Link>
              </Stack>

              <Stack>
                <Typography variant="body1" gutterBottom>
                  your_mail@email.com
                </Typography>
                <Typography variant="body1">+123 456 7890</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={5.5}>
            <Stack direction="row-reverse">
              <Box>
                <Image
                  src={`/icon/iconNav1.svg`}
                  alt=""
                  width={80}
                  height={80}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
