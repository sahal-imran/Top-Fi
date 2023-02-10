import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import { Button } from "@mui/material";

function InvestAndGovern() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "100vh", xs: "auto" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { md: 0, xs: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "550px", xs: "auto" },
        }}
      >
        <Box
          id="TransparentRevenuesLeftBG"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            borderRadius: "1.3rem",
            overflow: "hidden",
            height: "100%",
            mb: { md: 0, xs: 4 },
            overflow: "hidden",
            boxShadow: "inset 0 0 20px #D9C256",
          }}
        >
          <Box
            sx={{
              width: { md: "60%", xs: "100%" },
              height: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: { md: 5, xs: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                lineHeight: "45.99px",
                fontSize: { md: "2.2rem", xs: "1.8rem" },
                fontWeight: 600,
                color: "white",
              }}
            >
              $10k airdrop!
            </Typography>
            <Typography
              sx={{
                maxWidth: "62rem",
                mt: 3,
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: { md: "2rem", xs: "1.5rem" },
                fontSize: { md: "1.2rem", xs: "15px" },
                fontWeight: 400,
                color: "white",
              }}
            >
              Venture Metavault DAO is a blockchain-based, community governed
              investment platform and decentralized venture capital fund. It
              allows anyone to participate in the latest and most profitable
              DeFi projects and strategies and deploys a in-house development
              team for project incubation.
            </Typography>
            <Button
              variant="contained"
              sx={{
                px: "6.5rem",
                py: "1.2rem",
                background:
                  "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
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
              Enter Airdrop
            </Button>
          </Box>
          <Box
            sx={{
              width: { md: "40%", xs: "100%" },
              height: { md: "100%", xs: "300px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
}

export default InvestAndGovern;
