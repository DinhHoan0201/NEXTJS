import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { banner2Styles } from "./banner2";
const ButtonList = ["CONTATO", "SOBRE", "SUPORTE", "EMPREGOS"];
const FotterIcon = ["twitch", "instagram", "twitter", "youtube", "facebook"];
function ShowFooterIcon(props: { item: string[] }) {
  return (
    <>
      <Stack direction="row" spacing={4}>
        {props.item.map((item, index) => (
          <Image
            key={index}
            src={`/icon/${item}.svg`}
            alt=""
            width={24}
            height={24}
          />
        ))}
      </Stack>
    </>
  );
}
function ShowButtonList(props: { item: string[] }) {
  return (
    <>
      <Stack direction="row" spacing={3}>
        {props.item.map((item, index) => (
          <Typography sx={banner2Styles.title_} key={index}>
            {item}
          </Typography>
        ))}
      </Stack>
    </>
  );
}
const Footer = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: "94px 0px 94px 0px" }}
        >
          <Stack direction="row" spacing={5}>
            <Image src={`/icon/Logofooter.svg`} alt="" width={60} height={55} />
            <Stack direction="column" spacing={1}>
              <ShowButtonList item={ButtonList} />
              <Typography sx={{ ...banner2Styles.content_, fontSize: "13px" }}>
                ©2023 Rockstar Games, Inc. - YWR Studio.
              </Typography>
            </Stack>
          </Stack>
          <ShowFooterIcon item={FotterIcon} />
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
