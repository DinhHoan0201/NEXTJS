import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const Hometemplate = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: "60px",
          }}
        >
          <Image src={`/icon/iconNav1.svg`} alt="" width={80} height={80} />
          <Image src={`/icon/iconNav2.svg`} alt="" width={36} height={23} />
        </Box>
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            color: "#FFF",
            pt: "194px",
            pb: "334px",
          }}
        >
          <Box
            sx={{
              width: "520px",
              height: "108px",
              fontFamily: "League Gothic",
              fontSize: "96px",
              fontWeight: "400",
              fontStyle: "normal",
              textAlign: "center",
            }}
          >
            YOUR NAME
          </Box>
          <Box
            sx={{
              width: "530px",
              height: "30px",
              fontFamily: "League Spartan",
              fontSize: "32px",
              letterSpacing: "11.52px",
              fontStyle: "normal",
              textAlign: "center",
            }}
          >
            WEB-DESIGNER
          </Box>
        </Stack>
      </Container>
    </>
  );
};
export default Hometemplate;
