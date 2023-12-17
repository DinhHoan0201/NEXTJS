import React from "react";
import Image from "next/image";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import { Typography } from "@mui/material";
export const sectionStyles = {
  title: {
    fontFamily: "League Spartan",
    fontWeight: "700",
    width: "45%",
    height: "24px",
    pt: "60px",
  },
  content: {
    width: "45%",
    fontFamily: "Roboto",
    fontWeight: "400",
    pt: "22px",
  },
};
const myskills = [
  "HTML",
  "Figma",
  "CSS",
  "Chrome",
  "JavaScript",
  "VSCode",
  "ReactJS",
  "Git",
  "NodeJs",
  "NPM",
];
function MySkills(props: { item: string[] }) {
  const itemInrow = [];
  for (let i = 0; i < props.item.length; i += 2) {
    itemInrow.push(props.item.slice(i, i + 2));
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {itemInrow.map((row, rowindex) => (
          <Box key={rowindex}>
            {row.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  pb: rowindex <= itemInrow.length - 1 ? "16px" : 0,
                }}
                key={index}
              >
                <Image
                  src={`/icon/${item}.svg`}
                  alt=""
                  width={12.344}
                  height={14}
                />
                {item}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}
const Mid = () => {
  return (
    <>
      <Container sx={{ color: "#000" }}>
        <Stack direction="column" alignItems="center">
          <Typography variant="h4" sx={sectionStyles.title}>
            About me
          </Typography>
          <Typography variant="body1" sx={sectionStyles.content}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </Typography>
        </Stack>
        <Stack direction="column" alignItems="center" sx={{ pb: "105px" }}>
          <Typography variant="h4" sx={sectionStyles.title}>
            My Skills
          </Typography>
          <Typography variant="body1" sx={sectionStyles.content}>
            <MySkills item={myskills} />
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Mid;
