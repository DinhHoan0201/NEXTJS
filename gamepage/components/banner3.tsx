import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { headerStyles } from "./header";
const banner3Styles = {
  title_: {
    fontSize: "42px",
    fontWeight: "800",
    letterSpacing: "-0.457px",
    lineHeight: "50px",
  },
  content_: {
    fontWeight: "500",
    width: "325px",
    lineHeight: "150%",
    letterSpacing: "-0.352px",
  },
};
const Banner3 = () => {
  return (
    <>
      <Container sx={{ p: "112px 0px 95px 0px" }}>
        <Box
          sx={{
            backgroundImage: `url("./images/bannerbg1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack sx={{ p: "32px 0px 32px 0px" }}>
            <Grid container>
              <Grid item xs={5}>
                <Stack direction="column" spacing={8} sx={{ pt: "40px" }}>
                  <Stack direction="column" spacing={4}>
                    <Stack
                      direction="row"
                      spacing={2.3}
                      justifyContent="center"
                    >
                      <Image
                        src="./icon/Logo1.svg"
                        alt=" "
                        width={138}
                        height={127}
                      />
                      <Stack direction="column" justifyContent="center">
                        <Typography sx={banner3Styles.title_}>Games</Typography>
                        <Typography sx={banner3Styles.title_}>
                          Launcher
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="center">
                      <Typography variant="h4" sx={banner3Styles.content_}>
                        Todos os seus jogos em um só lugar.
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        ...headerStyles._button,
                        color: "black",
                        padding: "15px 96px 15px 96px",
                        fontWeight: "800",
                      }}
                    >
                      Dowload
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={7}
                sx={{
                  height: "470px",
                  backgroundImage: `url("./images/banner4.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Banner3;
