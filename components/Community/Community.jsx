import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Zoom, Slide } from "react-awesome-reveal";
import AnchorLink from "@mui/material/Link";

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
          <Zoom>
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
                    <Zoom>
                      <AnchorLink
                        href={item.href}
                        target="_blank"
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
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background:
                              "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
                          },
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
                            alt=""
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
                          alt=""
                        />
                      </AnchorLink>
                    </Zoom>
                  </Grid>
                );
              })}
            </Grid>
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
              © 2023 Top Fi
            </Typography>
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
    href: "https://t.me/topfiofficial",
  },
  {
    icon: "/svg/Twitter.svg",
    type: "Twitter",
    arrow: "/svg/ArrowUp.svg",
    href: "https://twitter.com/top_fi_tweets",
  },
  {
    icon: "/svg/CDiscord.svg",
    type: "Discord",
    arrow: "/svg/ArrowUp.svg",
    href: "https://discord.gg/topfi",
  },
  {
    icon: "/svg/CMedium.svg",
    type: "Medium",
    arrow: "/svg/ArrowUp.svg",
    href: "https://medium.com/@topfi",
  },
  {
    icon: "/svg/github.svg",
    type: "GitHub",
    arrow: "/svg/ArrowUp.svg",
    href: "",
  },
  {
    icon: "/svg/CGitBook.svg",
    type: "GitBook",
    arrow: "/svg/ArrowUp.svg",
    href: "",
  },
];
export default Community;
