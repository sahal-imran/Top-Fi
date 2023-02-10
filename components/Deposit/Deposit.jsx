import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AnchorLink from "@mui/material/Link";
import { Zoom } from "react-awesome-reveal";

function Deposit() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        py: { md: 0, xs: 8 },
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
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          {/* left part */}
          <Box
            sx={{
              width: { md: "30%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: { md: 4, xs: 0 },
              mb: { md: 0, xs: 4 },
            }}
          >
            <Grid
              container
              columnSpacing={{ md: 0, xs: 0 }}
              rowSpacing={{ md: 4.5, xs: 2 }}
            >
              {deposit.map((item, index) => {
                return (
                  <Grid key={index} item md={12} sm={6} xs={12}>
                    <Box
                      id="depositBg"
                      sx={{
                        width: "100%",
                        height: "298px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        borderRadius: "1.2rem",
                        p: 3,
                        boxShadow: "inset 0 0 20px #D9C256",
                      }}
                    >
                      <Zoom>
                        <Image
                          src={item.icon}
                          width={105}
                          height={105}
                          objectFit="contain"
                          alt=""
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            ml: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: "left",
                              fontFamily: "Inter",
                              lineHeight: "26px",
                              fontSize: { md: "35px", xs: "30px" },
                              fontWeight: 600,
                              color: "white",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <AnchorLink
                            href={item.href}
                            target="_blank"
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              textDecoration: "none",
                              color: "white",
                              mt: 2,
                              cursor: "pointer",
                            }}
                          >
                            See more
                            <Image
                              src="/svg/SeeMore.svg"
                              width={24}
                              height={24}
                              objectFit="contain"
                              alt=""
                            ></Image>
                          </AnchorLink>
                        </Box>
                      </Zoom>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {/* Right part */}
          <Box
            sx={{
              width: { md: "67%", xs: "100%" },
              borderRadius: "1.3rem",
              height: "630px",
              boxShadow: "inset 0 0 20px #D9C256",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { md: "60%", xs: "50%" },
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image
                src={"/svg/Deposite3.svg"}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: { md: "40%", xs: "50%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: { md: 0, xs: -5 },
                p: 4,
              }}
            >
              <Zoom>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    lineHeight: { md: "45.99px", xs: "37px" },
                    fontSize: { md: "2.2rem", xs: "1.8rem" },
                    fontWeight: 600,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Depositing on Arbitrum Network
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    lineHeight: { md: "26px", xs: "24px" },
                    fontSize: { md: "18px", xs: "16px" },
                    fontWeight: 500,
                    color: "white",
                    mt: 2,
                    textAlign: { md: "center", xs: "left" },
                    mb: { md: -5, xs: 0 },
                    textAlign: "center",
                  }}
                >
                  You can deposit and redeem against treasury assets using our
                  website. This avoids frontrunning and market making cost.
                </Typography>
                <Box
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
                </Box>
              </Zoom>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Deposit;

const deposit = [
  {
    icon: "/Png/Deposit1.png",
    title: "Docs",
    href: "https://docs.topfi.io/",
  },
  {
    icon: "/Png/Deposit2.png",
    title: "Roadmap",
    href: "https://discord.com/channels/1064350592476131328/1069117288986451978",
  },
];
