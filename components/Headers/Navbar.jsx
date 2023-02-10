import { React, useState } from "react";
import { Box, Container } from "@mui/system";
import AnchorLink from "@mui/material/Link";
import Image from "next/image";
import { Link } from "react-scroll";
import Typography from "@mui/material/Typography";
import CustomButton from "../common/Button/CustomButton";
import Hamburger from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function Navbar() {
  // States
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: { md: "0.7rem", xs: "1rem" },
          px: { lg: "7.5rem", xs: "unset" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(5px)",
          position: "fixed",
          zIndex: 100,
          top: 0,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
          }}
        >
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Image
              src={"/TOP Token 100x100.png"}
              alt=""
              width={70}
              height={70}
              objectFit="fill"
            />
          </Box>

          {/* Middle */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {Links.map((item, index) => {
              return index === 0 ? (
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  style={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {item.Name}
                </Link>
              ) : (
                <AnchorLink
                  href={item.To}
                  target={"_blank"}
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {item.Name}
                </AnchorLink>
              );
            })}
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnchorLink
              href="https://t.me/topfiofficial"
              target={"_blank"}
              sx={{ mr: 2, cursor: "pointer", width: "24px", height: "24px" }}
            >
              <Image
                src={"/svg/Telegram.svg"}
                width={24}
                height={24}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
            <AnchorLink
              href="https://twitter.com/top_fi_tweets"
              target={"_blank"}
              sx={{ mr: 2, cursor: "pointer", width: "24px", height: "24px" }}
            >
              <Image
                src={"/svg/Twitter.svg"}
                width={24}
                height={24}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
            <AnchorLink
              href="https://discord.gg/topfi"
              target={"_blank"}
              sx={{ cursor: "pointer", mr: 4, width: "24px", height: "24px" }}
            >
              <Image
                src={"/svg/Discord.svg"}
                width={24}
                height={24}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
            <CustomButton
              paddingX="1rem"
              paddingY="0.8rem"
              text="Enter App"
              fontSize="1rem"
            />
          </Box>

          {/* Humburger */}
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            {isOpen ? null : (
              <CustomButton
                paddingX="1rem"
                paddingY="0rem"
                text="Enter App"
                fontSize="1rem"
                marginRight="0rem"
              />
            )}
            <Hamburger
              color="white"
              toggled={isOpen}
              toggle={setOpen}
              size={20}
            />
          </Box>
        </Container>
        <Drawer
          open={isOpen}
          onClose={() => setOpen(false)}
          direction="left"
          className="Drawer"
          style={{
            width: "100%",
            background: "rgb(2,0,36)",
            padding: "0px 15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "1rem",
              px: "10px",
            }}
          >
            {/* Logo */}
            <Image
              alt=""
              src={"/Logo.svg"}
              width={160}
              height={60}
              objectFit="fill"
            />

            <Hamburger
              color="white"
              toggled={isOpen}
              toggle={setOpen}
              size={20}
            />
          </Box>
          <AnchorLink
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "none",
              mt: 5,
              borderBottom: "1px solid white ",
              pb: 2,
            }}
          >
            <RocketLaunchIcon
              sx={{ color: "white", fontSize: "28px", mr: 2 }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Roadmap
            </Typography>
            <Box sx={{ position: "absolute", right: "15px" }}>
              <Image
                src={"/svg/ArrowUp.svg"}
                width={38}
                height={38}
                objectFit="fill"
                alt=""
              />
            </Box>
          </AnchorLink>
          <AnchorLink
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "none",
              mt: 5,
              borderBottom: "1px solid white ",
              pb: 2,
            }}
          >
            <FileCopyIcon sx={{ color: "white", fontSize: "28px", mr: 2 }} />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                mr: 25,
              }}
            >
              Docs
            </Typography>
            <Box sx={{ position: "absolute", right: "15px" }}>
              <Image
                src={"/svg/ArrowUp.svg"}
                width={38}
                height={38}
                objectFit="fill"
                alt=""
              />
            </Box>
          </AnchorLink>
          <AnchorLink
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "none",
              mt: 5,
              borderBottom: "1px solid white ",
              mb: 6,
              pb: 2,
            }}
          >
            <CurrencyExchangeIcon
              sx={{ color: "white", fontSize: "28px", mr: 2 }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                mr: 25,
              }}
            >
              Trade
            </Typography>
            <Box sx={{ position: "absolute", right: "15px" }}>
              <Image
                src={"/svg/ArrowUp.svg"}
                width={38}
                height={38}
                objectFit="fill"
                alt=""
              />
            </Box>
          </AnchorLink>

          <Button
            sx={{
              width: "100%",
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textDecoration: "none",
              color: "white",
              borderRadius: "1.5rem",
              border: "2px solid white",
            }}
          >
            <Image
              src={"/svg/Trade.svg"}
              width={48}
              height={49}
              objectFit="fill"
              alt=""
            />
            <Typography
              sx={{
                color: "rgb(255, 170, 39)",
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "capitalize",
                fontFamily: "Inter",
                letterSpacing: "1px",
                my: 1.5,
              }}
            >
              Try Metavault.Trade
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: 500,
                textTransform: "none",
                textAlign: "left",
              }}
            >
              Trade top cryptocurrencies with up to 30x leverage directly from
              your private wallet.
            </Typography>
          </Button>
          {/* Footer */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: "4rem",
            }}
          >
            <AnchorLink
              sx={{ mr: 8, cursor: "pointer", width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Telegram.svg"}
                width={30}
                height={30}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
            <AnchorLink
              sx={{ mr: 8, cursor: "pointer", width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Twitter.svg"}
                width={30}
                height={30}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
            <AnchorLink
              sx={{ cursor: "pointer", mr: 8, width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Discord.svg"}
                width={30}
                height={30}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
            <AnchorLink
              sx={{ mr: 3.8, cursor: "pointer", width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Github.svg"}
                width={30}
                height={30}
                objectFit="fill"
                alt=""
              />
            </AnchorLink>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;

const Links = [
  {
    Name: "Home",
    To: "Home",
  },
  {
    Name: "Docs",
    To: "https://docs.topfi.io/",
  },
  {
    Name: "Trade",
    To: "https://app.sushi.com/swap?inputCurrency=0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8&outputCurrency=0xd14aa9de5B0846F74D068f3Ff8db0F760D83C850&chainId=42161",
  },
  {
    Name: "Tutorials",
    To: "https://www.youtube.com/playlist?list=PLBkbveJL8B23T16Wplggcu9dVKIpK7bCl",
  },
];
