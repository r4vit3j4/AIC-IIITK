import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  FaGooglePlusG,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    title: "facebook",
    Icon: FaFacebookF,
    link: "https://www.facebook.com/aiciiitkottayam/",
  },
  {
    title: "twitter",
    Icon: FaTwitter,
    link: "https://twitter.com/AICIIITKottayam",
  },
  {
    title: "google-plus",
    Icon: FaGooglePlusG,
    link: "#",
  },
  {
    title: "instagram",
    Icon: FaInstagram,
    link: "https://www.instagram.com/aic.iiitkottayam/",
  },
  {
    title: "linkedin",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/company/aic-iiitkottayam",
  },
  {
    title: "youtube",
    Icon: FaYoutube,
    link: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex w="full" justify="center" bg="#1c1c21" py="14" px="4">
      <Flex w="full" maxW="7xl" direction="column" align="center" gap="10">
        <Link to="/">
          <Image
            src="/assets/logos/logo-alt.png"
            w="16"
            h="16"
            objectFit="contain"
            _hover={{
              opacity: "0.8",
            }}
          />
        </Link>
        <Flex gap="5" flexWrap="wrap" align="center" justify="center">
          {socialLinks.map(({ Icon, link }, index) => {
            return (
              <ChakraLink href={link} key={index} target="_blank">
                <Box
                  p="4"
                  bg="blue.600"
                  borderRadius="lg"
                  boxShadow="lg"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  <Icon size="20" color="white" />
                </Box>
              </ChakraLink>
            );
          })}
        </Flex>
        <Flex direction="column" gap="4" align="center" textAlign="center">
          <Text color="whiteAlpha.600">
            COPYRIGHT © 2019-{currentYear}. ALL RIGHTS RESERVED. DESIGNED BY IOT
            CLOUD RESEARCH TEAM OF IIIT KOTTAYAM.
          </Text>
          <Flex direction="column" gap="2" align="center" color="blue.600">
            <ChakraLink
              title="free world map tracker"
              href="http://smallcounter.com/vmap/1527488886/"
              isExternal={true}
            >
              <Image
                title="free world map counter"
                src="https://smallcounter.com/map/view.php?type=180&id=1527488886"
                border="1"
                alt="world map hits counter"
              />
            </ChakraLink>
            <ChakraLink href="http://smallcounter.com/" isExternal={true}>
              AIC-IIITKOTTAYAM VISITORS
            </ChakraLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
