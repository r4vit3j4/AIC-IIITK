import { Flex } from "@chakra-ui/react";
import React from "react";
import BusinessModel from "../components/HomePage/BusinessModel";
import Contact from "../components/HomePage/Contact";
import Details from "../components/HomePage/Details";
import HeroSection from "../components/HomePage/HeroSection";
import Quotes from "../components/HomePage/Quotes";
import Stats from "../components/HomePage/Stats";
import SuccessFormula from "../components/HomePage/SuccessFormula";

const HomePage = () => {
  return (
    <Flex w="full" direction="column" align="center" justify="center">
      <HeroSection />
      <Details />
      <SuccessFormula />
      <Stats />
      <BusinessModel />
      <Quotes />
      <Contact />
    </Flex>
  );
};

export default HomePage;
