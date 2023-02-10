import React from "react";
import { Box, Container } from "@mui/system";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Slide } from "react-awesome-reveal";

function Hero() {
  return (
    <Box
      id="Home"
      sx={{
        width: "100%",
        background: "radial-gradient(circle, rgba(46,46,46,1) 0%, rgba(37,37,37,1) 22%, rgba(10,10,10,1) 64%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "100vh" },
          pt: { md: 12, xs: 8.5 },
          pb: { md: "unset", xs: 12 },
        }}
      >
        <Slide triggerOnce direction="up">
          <Typography
            sx={{
              maxWidth: { md: "40rem", xs: "100%" },
              fontFamily: "Inter",
              textAlign: "center",
              lineHeight: { md: "4.2rem", xs: "3rem" },
              mt: { md: "-54px", xs: "5.5rem" },
              fontSize: { md: "3.8rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "#D9C256",
            }}
          >
            Venture Investments & Incubation
          </Typography>
          <Typography
            sx={{
              maxWidth: "62rem",
              mt: 3,
              textAlign: "center",
              fontFamily: "Inter",
              lineHeight: { md: "2rem", xs: "1.5rem" },
              fontSize: { md: "1.2rem", xs: "15px" },
              fontWeight: 500,
              color: "white",
            }}
          >
            Venture Metavault DAO is a blockchain-based, community governed
            investment platform and decentralized venture capital fund. It
            allows anyone to participate in the latest and most profitable DeFi
            projects and strategies and deploys a in-house development team for
            project incubation.
          </Typography>
          <Button
            variant="contained"
            sx={{
              px: "6.5rem",
              py: "1.2rem",
              background: "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
              color: "black",
              borderRadius: ".8rem",
              fontFamily: "Inter",
              textTransform: "capitalize",
              mt: "2.5rem",
              fontWeight: 600,
              fontSize: "1.2rem",
              "&:hover": {
                background:
                  "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
              },
            }}
          >
            Enter App
          </Button>
        </Slide>
        {/* <Box
            sx={{
              position: "relative",
              width: { md: "180px", xs: "130px" },
              height: { md: "180px", xs: "130px" },
            }}
          >
            <Image
              src={"/svg/EtheriumIcon.svg"}
              layout="fill"
              objectFit="contain"
              alt=""
            ></Image>
          </Box> */}
      </Container>
    </Box>
  );
}

export default Hero;
