import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { banner1Styles } from "./banner1";
export const banner2Styles = {
  title_: { color: "#FFF", fontWeight: "500", letterSpacing: "-0.352px" },
  content_: {
    color: "#797979",
    fontWeight: "300",
    letterSpacing: "-0.132px",
  },
};
const Banner2 = () => {
  return (
    <>
      <Container>
        <Typography variant="h3" sx={banner1Styles.title_}>
          Últimas Notícias
        </Typography>
        <Grid sx={{ pt: "40px" }} container spacing={5}>
          <Grid item xs={8.8}>
            <Card>
              <CardMedia
                sx={{ width: "860px", height: "352px" }}
                image="/images/banner1.jpg"
                title=""
              />
              <CardContent sx={{ background: "black" }}>
                <Stack
                  sx={{ pt: "24px", pb: "35px" }}
                  direction="column"
                  spacing={1}
                >
                  <Typography variant="h4" sx={banner2Styles.title_}>
                    Grand Theft Auto VI - Veja o 1º trailer agora
                  </Typography>
                  <Typography sx={banner2Styles.content_}>
                    Rockstar Games 5 de dezembro de 2023{" "}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3.2}>
            <Stack direction="column" spacing={5}>
              <Card>
                <CardMedia
                  sx={{ width: "280px", height: "142px" }}
                  image="/images/banner2.jpg"
                  title=""
                />
                <CardContent sx={{ background: "#020202" }}>
                  <Typography
                    sx={{
                      ...banner2Styles.title_,
                      fontSize: "13px",
                      width: "190px",
                    }}
                  >
                    1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.
                  </Typography>
                  <Typography
                    sx={{ ...banner2Styles.content_, fontSize: "12px" }}
                  >
                    Rockstar Games 1 de dezembro de 2023
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia
                  sx={{ width: "280px", height: "142px" }}
                  image="/images/banner3.png"
                  title=""
                />
                <CardContent sx={{ background: "#020202" }}>
                  <Typography
                    sx={{
                      ...banner2Styles.title_,
                      fontSize: "13px",
                      width: "190px",
                    }}
                  >
                    Nova atualização de GTA Online chegando em dezembro
                  </Typography>
                  <Typography
                    sx={{ ...banner2Styles.content_, fontSize: "12px" }}
                  >
                    GTA Online 30 de novembro de 2023
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner2;
