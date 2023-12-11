import React from "react";
import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
const data = [
  "Address: Nha Trang",
  "Email: HoanIT.21@gmail.com",
  "Phone: 0968311424",
];
const hobby = ["Sport", "Game", "Coding", "Girlfriend"];
const exp = ["HTML", "JAVASCRIPT", "TAILWIND", "NODEJS", "TYPESCRIPT", "CSS"];

const SectionHeader = () => {
  function Avatar() {
    return (
      <>
        <Image src="/images/1.jpg" width={300} height={400} alt="no name" />
      </>
    );
  }
  function Section(props: { title: string; item: string[] }) {
    return (
      <>
        <Box>
          <h2>PHAM DINH HOAN</h2>
        </Box>
        <Box>
          <h3>{props.title}</h3>
          <ul>
            {props.item.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Box>
      </>
    );
  }

  function Section1(props: { title: string; item: string[] }) {
    return (
      <>
        <Box>
          <h3> {props.title}</h3>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {props.item.map((item, index) => (
            <Box sx={{ display: "flex", flexDirection: "column" }} key={index}>
              {item}
              <Image
                src={`/icon/${item}.svg`}
                alt={`${item}.svg`}
                width={30}
                height={30}
              />
            </Box>
          ))}
        </Box>
      </>
    );
  }
  function Icon(props: { title: string; item: string[] }) {
    const itemsInRows = [];
    for (let i = 0; i < props.item.length; i += 3) {
      itemsInRows.push(props.item.slice(i, i + 3));
    }

    return (
      <>
        <Box sx={{ textAlign: "center" }}>
          <h2>{props.title}</h2>
        </Box>
        <Box>
          {itemsInRows.map((row, rowIndex) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                fontWeight: "bold",
              }}
              key={rowIndex} >
              {row.map((item, index) => (
                <Box
                  sx={{ display: "flex", flexDirection: "column", pt: "45px" }}
                  key={index}
                >
                  {item}
                  <Image
                    src={`/svg/${item}.svg`}
                    alt={`${item}.svg`}
                    width={100}
                    height={100}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </>
    );
  }

  function Icon1(props: { title: string; item: string[] }) {
    return (
      <>
        <div>
          {props.item.map((item, index) => (
            <div key={index}>
              {item}
              <Image
                src={`/svg/${item}.svg`}
                alt={`${item}.svg`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Avatar />
          <Section title="CONTACT" item={data} />
          <Section1 title="HOBBY" item={hobby} />
        </Grid>
        <Grid item xs={9}>
          <Icon title="Progaming Experience" item={exp} />
        </Grid>
      </Grid>
    </>
  );
};
export default SectionHeader;
