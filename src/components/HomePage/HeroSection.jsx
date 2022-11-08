import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Show,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image
    objectFit="cover"
    objectPosition="center"
    w="full"
    src="/assets/images/slider/slider1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    minH="500px"
    height={["500px", "500px", "92vh"]}
  />,
  <Image
    objectFit="cover"
    objectPosition="center"
    w="full"
    src="/assets/images/slider/slider2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    minH="500px"
    height={["500px", "500px", "92vh"]}
  />,
  <Image
    objectFit="cover"
    objectPosition="center"
    w="full"
    src="/assets/images/slider/slider3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    minH="500px"
    height={["500px", "500px", "92vh"]}
  />,
];

const HeroSection = () => {
  return (
    <Box w="full" position="relative">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={{
          0: {
            items: 1,
          },
        }}
      />
      <Flex
        position="absolute"
        direction="column"
        justify="center"
        align="center"
        left="0"
        top="0"
        w="full"
        h="full"
        zIndex={10}
        textAlign="center"
        textColor="white"
        p="10"
        gap="5"
        bg="blackAlpha.600"
      >
        <Show above="md">
          <Heading fontWeight="bold">AIC-IIIT KOTTAYAM</Heading>
        </Show>
        <Heading fontWeight="bold" fontSize="5xl">
          An Incubation Centre
        </Heading>
        <Text maxW="2xl" fontWeight="medium">
          of the Indian Institute of Information Technology Kottayam
          (IIITKottayam) on IoT Cloud Societal projects. Acknowledges: AIM-NITI
          scheme of Government of India.
        </Text>
        <Show above="md">
          <Flex gap="5">
            <Button
              as={Link}
              colorScheme="telegram"
              size="lg"
              href="https://goo.gl/forms/bYQ16uftJgLtssgr2"
              textDecoration="none !important"
              target="_blank"
            >
              Apply for Incubation
            </Button>
            <Button
              as={RouterLink}
              to="/summary"
              colorScheme="telegram"
              size="lg"
              variant="outline"
            >
              Learn More
            </Button>
          </Flex>
        </Show>
      </Flex>
    </Box>
  );
};

export default HeroSection;
