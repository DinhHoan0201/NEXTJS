import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { headerStyles } from "./header";
import Image from "next/image";
export const banner1Styles = {
  title_: {
    fontWeight: "800",
    letterSpacing: "-0.528px",
    color: "#F6F6F6",
  },
  button_: {
    background: "#606060",
    borderRadius: "100px",
    padding: "4px 24px 4px 24px",
  },
};
const ImagesList = ["image1", "image2", "image3", "image4"];
function ShowImages(props: { item: string[] }) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ pt: "40px" }}>
        {props.item.map((item, index) => (
          <Box key={index}>
            <Image
              key={index}
              src={`/images/${item}.png`}
              alt=""
              width={260}
              height={316}
            />
          </Box>
        ))}
      </Stack>
    </>
  );
}
const Banner1 = () => {
  return (
    <>
      <Container sx={{ p: "80px 0px 112px 0px" }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3" sx={banner1Styles.title_}>
            Jogos em Destaque
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{ ...headerStyles._text, ...banner1Styles.button_ }}
            >
              PC
            </Button>
            <Button
              variant="contained"
              sx={{ ...headerStyles._text, ...banner1Styles.button_ }}
            >
              Console
            </Button>
            <Button
              variant="contained"
              sx={{ ...headerStyles._text, ...banner1Styles.button_ }}
            >
              Dispositivos Portáteis
            </Button>
          </Stack>
        </Stack>
        <ShowImages item={ImagesList} />
        <Stack direction="row" justifyContent="center" sx={{ pt: "60px" }}>
          <Button
            variant="contained"
            sx={{
              ...headerStyles._button,
              color: "black",
              padding: "15px 48px 15px 48px",
            }}
          >
            Ver todos os jogos
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Banner1;
