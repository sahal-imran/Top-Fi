import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import AnchorLink from "@mui/material/Link";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Community() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
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
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            mt: { md: 0, xs: 10 },
          }}
        >
          <Zoom cascade>
            <Typography
              sx={{
                width: "100%",
                fontFamily: "Inter",
                lineHeight: { md: "26px", xs: "30px" },
                fontSize: { md: "47px", xs: "38px" },
                fontWeight: 600,
                color: "white",
                textAlign: { lg: "left", xs: "center" },
              }}
            >
              Community
            </Typography>
            <Typography
              sx={{
                width: { lg: "50%", xs: "100%" },
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: { md: "36px", xs: "27px" },
                fontSize: { md: "20px", xs: "16px" },
                fontWeight: 400,
                textAlign: { lg: "left", xs: "center" },
                color: "white",
                mt: 4,
              }}
            >
              Join the conversation on Discord, Twitter, and Medium to stay up
              to date on the latest community news.
            </Typography>
          </Zoom>
          {/* Grid */}
          <Box sx={{ flexGrow: 1, width: "100%", mt: 4 }}>
            <Grid container spacing={{ md: 4, xs: 1 }}>
              {Communit_Links.map((item, index) => {
                return (
                  <Grid key={index} item lg={4} md={6} xs={12}>
                    <Fade bottom cascade>
                      <AnchorLink
                        sx={{
                          height: "90px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid white",
                          borderRadius: "10px",
                          textDecoration: "none",
                          cursor: "pointer",
                          background: "hsla(0,0%,100%,.15)",
                          p: 1,
                          mb: { md: 0, xs: 3 },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                            ml: 2,
                          }}
                        >
                          <Image
                            src={item.icon}
                            width={35}
                            height={35}
                            objectFit="contain"
                          />
                          <Typography
                            sx={{
                              fontFamily: "Inter",
                              fontSize: "20px",
                              fontWeight: 400,
                              color: "white",
                              pl: 3,
                            }}
                          >
                            {item.type}
                          </Typography>
                        </Box>
                        <Image
                          src={item.arrow}
                          width={30}
                          height={30}
                          objectFit="contain"
                        />
                      </AnchorLink>
                    </Fade>
                  </Grid>
                );
              })}
            </Grid>
            <Fade bottom cascade >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 400,
                color: "white",
                textAlign: { lg: "left", xs: "center" },
                mt: 3,
                pb: 6,
              }}
            >
              © 2022 Metavault
            </Typography>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const Communit_Links = [
  {
    icon: "/svg/Telegram.svg",
    type: "Telegram",
    arrow: "/svg/ArrowUp.svg",
  },
  {
    icon: "/svg/Twitter.svg",
    type: "Telegram",
    arrow: "/svg/ArrowUp.svg",
  },
  {
    icon: "/svg/CDiscord.svg",
    type: "Telegram",
    arrow: "/svg/ArrowUp.svg",
  },
  {
    icon: "/svg/CMedium.svg",
    type: "Telegram",
    arrow: "/svg/ArrowUp.svg",
  },
  {
    icon: "/svg/github.svg",
    type: "Telegram",
    arrow: "/svg/ArrowUp.svg",
  },
  {
    icon: "/svg/CGitBook.svg",
    type: "Telegram",
    arrow: "/svg/ArrowUp.svg",
  },
];
export default Community;
