import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import {AiFillFacebook} from  "react-icons/ai";

const Footer = () => {
  const property = {
    imageUrl: "/assets/logos/nlogo.png",
  };

  return (
    <div>
      <Box bg="black" w="100%" p={4} color="white">
        <Box align="center">
          <Image
            boxSize="100px"
            objectFit="contain"
            src="http://icentre.iiitkottayam.ac.in/img/logo-alt.png"
            alt="image"
          />
          <Flex w="100%" justify="center" my="10">
          <AiFillFacebook size={35} color="white"/>
          <AiFillFacebook size={35} color="white"/>
          <AiFillFacebook size={35} color="white"/>
          <AiFillFacebook size={35} color="white"/>
          <AiFillFacebook size={35} color="white"/>


          </Flex>
          
          <Text color="white">
            COPYRIGHT © 2019-{new Date().getFullYear()}. ALL RIGHTS RESERVED. DESIGNED BY IOT CLOUD
            RESEARCH TEAM OF IIIT KOTTAYAM. Visitors{" "}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
