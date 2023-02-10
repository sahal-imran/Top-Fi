import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AnchorLink from "@mui/material/Link";
import { Zoom } from "react-reveal";

function Decentralized() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: {md:"100vh",xs:'100vhz'},
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          {/* left box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {md:"start",xs:"center"},
              alignItems: "center",
              width: { md: "50%", xs: "100%" },
            }}
          >
            <Zoom cascade >
            <Typography
              sx={{
                fontFamily: "Inter",
                textAlign:{md:"start",xs:"center"},
                lineHeight: { md: "4.8rem", xs: "3rem" },
                fontSize: { md: "4rem", xs: "2rem" },
                fontWeight: 700,
                color: "rgb(255, 170, 39)",
              }}
            >
              Decentralized, Secure & Reliable
            </Typography>
            </Zoom>
          </Box>
          {/* Right Box */}
          <Box
            sx={{
              width: { md: "50%", xs: "100%" },
              height: { md: "640px", xs: "400px" },
              position: "relative",
            }}
          >
            <Image
              src={"/Png/decentralized.png"}
              layout="fill"
              objectFit="contain"
            ></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Decentralized;
