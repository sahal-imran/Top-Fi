import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import { Zoom, Slide } from "react-awesome-reveal";

function Blog() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:"radial-gradient(circle, rgba(46,46,46,1) 0%, rgba(37,37,37,1) 22%, rgba(10,10,10,1) 64%)"
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 12,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Grid */}
          <Box sx={{ flexGrow: 1, width: "33%" }}>
            <Grid container spacing={{ md: 1, xs: 1 }}>
              {Blog_Data.map((item, index) => {
                return (
                  <Grid key={index} item md={4} sm={6} xs={12}>
                    <Box
                      sx={{
                        width: "100%",
                        minHeight: "470px",
                        display: "flex",
                        justifyContent: { md: "start", xs: "center" },
                        alignItems: { md: "start", xs: "center" },
                        flexDirection: "column",
                        borderRight: "1px solid rgb(31,31,34)",
                        borderLeft: "1px solid rgb(31,31,34)",
                        p: 4,
                      }}
                    >
                      <Zoom triggerOnce >
                        <Image
                          src={item.icon}
                          width={84}
                          height={84}
                          objectFit="contain"
                          alt=""
                        />
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            lineHeight: { md: "26px", xs: "30px" },
                            fontSize: { md: "25px", xs: "22px" },
                            fontWeight: 600,
                            color: "white",
                            textAlign: { md: "unset", xs: "center" },
                            mt: 3,
                            mb: 2,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontFamily: "Inter",
                            lineHeight: "28px",
                            fontSize: "16px",
                            fontWeight: 400,
                            textAlign: { md: "left", xs: "center" },
                            color: "white",
                          }}
                        >
                          {item.des}
                        </Typography>
                      </Zoom>
                    </Box>
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    height: { md: "510px", sm: "350px", xs: "510px" },
                    background:
                      "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
                    display: "flex",
                    flexDirection: { sm: "row", xs: "column" },
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1.5rem",
                    overflow:"hidden"
                  }}
                >
                  {/* left Box */}
                  <Box
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      px: 5,
                    }}
                  >
                    <Zoom triggerOnce >
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          lineHeight: "45.99px",
                          fontSize: {
                            md: "2.7rem",
                            sm: "2.2rem",
                            xs: "1.8rem",
                          },
                          fontWeight: 600,
                          color: "white",
                        }}
                      >
                        Join the Top Fi
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          width: "300px",
                          paddingY: { md: "1.4rem", xs: "1.3rem" },
                          background: "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
                          color: "white",
                          borderRadius: ".8rem",
                          fontFamily: "Inter",
                          textTransform: "capitalize",
                          fontWeight: 600,
                          fontSize: { md: "1.5rem", xs: "1.2rem" },
                          mt: 4,
                          whiteSpace: "noWrap",
                          "&:hover": {
                            background: "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
                          },
                        }}
                      >
                        Enter App
                      </Button>
                    </Zoom>
                  </Box>
                  {/* Right Box */}
                  <Box
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      height: { md: "510px", sm: "350px", xs: "400px" },
                      pt: { sm: 3.5, xs: 3 },
                      pl: { sm: 0, xs: 2 },
                    }}
                  >
                    {/* Image Box */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                      }}
                    >
                      <Slide
                      triggerOnce
                        direction="right"
                        style={{ width: "500px", height: "500px" }}
                      >
                        <Image
                          src={"/toplogo.d60b3afd.gif"}
                          layout="fill"
                          objectFit="fill"
                          alt=""
                        />
                      </Slide>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const Blog_Data = [
  {
    icon: "/svg/Blog1.svg",
    title: "A Winning Team",
    des: "Top Fi has a highly experienced and motivated core team with in-depth market knowledge and a desire to disrupt the DeFi 2.0 space. Our highly skilled developers can analyze, develop, and deploy smart contracts to maximize earnings from open-source technologies.",
  },
  {
    icon: "/svg/Blog2.svg",
    title: "Sustainable Growth",
    des: "Top Fi is focused on steady, sustainable growth for our community of investors through multiple income streams, including investments in the Web 3.0 projects and bonding/staking of our MVD token.",
  },
  {
    icon: "/svg/Blog3.svg",
    title: "Bulletproof Tokenomics",
    des: "Top Fi's tokenomics have several safeguards and other features in place to avoid dilution of the supply, which leads to devaluation of the token. It is our aim to make the MVD token deflationary over time.",
  },
  {
    icon: "/svg/Blog4.svg",
    title: "Community Governance",
    des: "The Top Fi controls the operations of the protocol, deciding on everything from investment opportunities to treasury allocations. Every decision is voted on by the DAO members, who are rewarded for their participation .",
  },
  {
    icon: "/svg/Blog5.svg",
    title: "Fairness and Transparency",
    des: "Every decision taken for the protocol is done so with fairness and full transparency for all community members to verify. There are also mechanisms in place to ensure fair earning distributions to investors, while the open source nature of the proiect allows anyone to see the Top Fi code. Our code also undergoes annual audits to ensure it remains secure and fair.",
  },
  {
    icon: "/svg/Blog6.svg",
    title: "Power of the DAO",
    des: "The DAO is the nerve center of the entire Top Fi operation, encompassing Top Fi.Trade, trading algorithms, a SaaS company and much more. The profits from all these ventures will always flow back to the DAO where they will be distributed fairly. This system is the embodiment of our decentralized ethos, and one that will remain at our core permanently.",
  },
];
export default Blog;
