import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import React from "react";
import Image from "next/image";
const sectionStyles = {
  title: {
    fontSize: "32px",
    fontFamily: "League Spartan",
    fontWeight: "700",
    width: "173px",
    height: "24px",
    pt: "60px",
  },
  content: {
    width: "535px",
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

const Hometemplate = () => {
  return (
    <>
      <Container sx={{ width: "auto", bgcolor: "black" }}>
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
        <Box
          sx={{
            color: "#FFF",
            pt: "194px",
            pb: "334px",
            ml: "333px",
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
        </Box>
      </Container>
      <Container sx={{ color: "#000" }}>
        <Box sx={{ ml: "320px" }}>
          <Box sx={sectionStyles.title}>About me</Box>
          <Box sx={sectionStyles.content}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </Box>
        </Box>
        <Box sx={{ ml: "320px", pb: "105px" }}>
          <Box>
            <Box sx={sectionStyles.title}>My Skills</Box>
          </Box>
          <Box sx={sectionStyles.content}>
            <MySkills item={myskills} />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Hometemplate;
