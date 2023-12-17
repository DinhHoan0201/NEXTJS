import React from "react";
import Image from "next/image";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
const imageslist = ["image", "image1", "image2"];
export const projectStyles = {
  button_: {
    background: "#D9D9D9",
    fontFamily: "Roboto",
    fontSize: "1px",
    fontWeight: "400",
    color: "#000",
    borderRadius: "1px",
    padding: "20px 62px 20px 62px",
  },
};
function ShowImagesList(props: { item: string[] }) {
  return (
    <>
      {props.item.map((item, index) => (
        <Box sx={{ background: "black" }} key={index}>
          <Image src={`/images/${item}.png`} alt="" width={360} height={455} />
        </Box>
      ))}
    </>
  );
}
const Project = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ pb: "80px" }}
        >
          <ShowImagesList item={imageslist} />
        </Stack>
        <Stack direction="row" spacing={8.2} justifyContent="center">
          <Button startIcon={<ArrowRightAltIcon />} sx={projectStyles.button_}>
            All Project
          </Button>
          <Button startIcon={<ArrowRightAltIcon />} sx={projectStyles.button_}>
            Contact me
          </Button>
        </Stack>
      </Container>
    </>
  );
};
export default Project;
