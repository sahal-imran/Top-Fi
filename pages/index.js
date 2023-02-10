import React from "react";
import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero/Hero";
import TransparentRevenues from "../components/TransparentRevenues/TransparentRevenues";
import InvestAndGovern from "../components/InvestAndGovern/InvestAndGovern";
import Deposit from "../components/Deposit/Deposit";
import Decentralized from "../components/Decentralized/Decentralized";
import Blog from "../components/Blog/Blog";
import Community from "../components/Community/Community";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <TransparentRevenues />
      <InvestAndGovern />
      <Deposit />
      {/* <Decentralized/> */}
      <Blog />
      <Community />
    </>
  );
}

export default index;
