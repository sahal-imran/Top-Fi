import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Zoom } from "react-reveal";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import NetworkLockedIcon from "@mui/icons-material/NetworkLocked";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function TransparentRevenues() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { md: 0, xs: 4 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        {/* right */}
        <Box
          id="TransparentRevenuesLeftBG"
          sx={{
            width: { md: "50%", xs: "100%" },
            height: { sm: "590px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mr: { md: 2 },
            // border: "1px solid white",
            boxShadow: "inset 0 0 20px #D9C256",
            borderRadius: "1.2rem",
            overflow: "hidden",
            p: 5,
          }}
        >
          <Zoom cascade>
            <Image
              src={"/toplogo.d60b3afd.gif"}
              width={300}
              height={250}
              objectFit="cover"
              alt=""
            />
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: "55.99px",
                fontSize: { md: "2.5rem", xs: "1.8rem" },
                fontWeight: 600,
                color: "#c5b260",
                mt: "-20px",
              }}
            >
              Welcome to
              <br />
              Top Fi!
            </Typography>
            {/* <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: { md: "26px", xs: "24px" },
                fontSize: { md: "18px", xs: "16px" },
                fontWeight: 500,
                color: "white",
                mt: 4,
              }}
            >
              Participate in proprietary yield strategies with Metavault DAO!
              Our team is constantly scouring the crypto landscape for new and
              potentially disruptive projects, protocols and strategies. We
              allocate treasury funds to the most promising projects at an early
              stage to capture the best rewards for our investors.
            </Typography> */}
          </Zoom>
        </Box>
        {/* left */}
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            ml: { md: 2 },
            mt: { md: 0, xs: 4 },
          }}
        >
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Grid container spacing={{ md: 4, xs: 2 }}>
              {Cards.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} md={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "280px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        // border: "1px solid white",
                        boxShadow: "inset 0 0 20px #D9C256",
                        borderRadius: "1.2rem",
                        p: 2,
                      }}
                    >
                      <Zoom cascade>
                        {/* <Image
                          src={item.Ico}
                          width={54}
                          height={54}
                          objectFit="contain"
                          alt=""
                        /> */}
                        {item.Ico}
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontFamily: "Inter",
                            lineHeight: "26px",
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "hsla(0,0%,100%,.7)",
                            mt: 1,
                          }}
                        >
                          {item.Title}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontFamily: "Inter",
                            lineHeight: "28px",
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "white",
                            mt: 1,
                          }}
                        >
                          {item.Price}
                        </Typography>
                      </Zoom>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TransparentRevenues;

const Cards = [
  {
    Ico: <MonetizationOnIcon sx={{ color: "#D9C256", fontSize: "45px" }} />,
    Title: "Top Price",
    Price: "$ 28.83",
  },
  {
    Ico: <CurrencyBitcoinIcon sx={{ color: "#D9C256", fontSize: "45px" }} />,
    Title: "Market Cap",
    Price: "$ 202,150",
  },
  {
    Ico: <NetworkLockedIcon sx={{ color: "#D9C256", fontSize: "45px" }} />,
    Title: "TVL",
    Price: "$ 124,124",
  },
  {
    Ico: <AccountBalanceIcon sx={{ color: "#D9C256", fontSize: "45px" }} />,
    Title: "Treasury Balance",
    Price: "$ 119,685",
  },
];
