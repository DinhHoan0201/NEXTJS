import { Button, Container, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const headerStyles = {
  _text: { letterSpacing: "-0.176px", color: "#FFF", fontWeight: "500" },
  _button: {
    background: "#FCAF17",
  },
};
const Header = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "30px 0px 30px 0px" }}
        >
          <Stack direction="row" spacing={6}>
            <Image src={`/icon/Logo.svg`} alt="" width={53} height={54} />
            <Stack direction="row">
              <Button
                variant="text"
                endIcon={<ArrowDropDownIcon />}
                sx={headerStyles._text}
              >
                Jogos
              </Button>
              <Button variant="text" sx={headerStyles._text}>
                Loja
              </Button>
              <Button variant="text" sx={headerStyles._text}>
                Ajuda
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={5}>
            <Button
              variant="contained"
              sx={{ ...headerStyles._button, color: "black" }}
            >
              Baixe o Launcher
            </Button>
            <Image src={`/icon/finding.svg`} alt="" width={48} height={48} />
            <Image src={`/icon/login.svg`} alt="" width={48} height={48} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Header;
