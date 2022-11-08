import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  HiExternalLink,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiPlantLine } from "react-icons/ri";
import { FaCogs, FaWrench, FaSignature } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { Link as ReachLink } from "react-router-dom";

const IncubationCards = [
  {
    heading: "Summary",
    description:
      "AIC-IIITKottayam is the incubation centre of Indian Institute of Information Technology Kottayam under AIM scheme of India",
    Icon: HiOutlineNewspaper,
    link: "/summary",
  },
  {
    heading: "Team Members",
    description:
      "AIC-IIITKottayam centre is governed by leading industrialists and academicians of the globe ...",
    Icon: HiOutlineUserGroup,
    link: "/team",
  },
  {
    heading: "Sustainability",
    description:
      "AIC-IIITKottayam aims at sustainability while creating an ecosystem of entrepreneurs in IoT cloud domain...",
    Icon: RiPlantLine,
    link: "/#",
  },
];

const ValuePropostionCards = [
  {
    heading: "Training Support",
    description:
      "We offer training in order to gain knowledge (both practical and theoretical) for incubatee developments.",
    Icon: FaWrench,
  },
  {
    heading: "Patent support",
    description:
      "IP support will be provided at our centre with leading mentors of AIC-IIITKottayam.",
    Icon: FaSignature,
  },
  {
    heading: "Idea Generation Support",
    description:
      "Knowledge hub for developing products will be offered to the incubatee via. brainstorms or hackathons.",
    Icon: FaCogs,
  },
  {
    heading: "Marketing",
    description:
      "Sales and marketing department of AIC-IIITKottayam will ensure that the product will be utilized in the society.",
    Icon: BiNetworkChart,
  },
  {
    heading: "Reputation",
    description:
      "Reputation for both mentors and incubates will be ensured at AIC-IIITKottayam.",
    Icon: BsStars,
  },
  {
    heading: "Global Visibility",
    description:
      "International and National collaborators or industrialists will be invited for wide visibility.",
    Icon: IoMdGlobe,
  },
];

const Details = () => {
  return (
    <Flex direction="column" gap="200" py="100" px="4" maxW="6xl">
      <Flex direction="column" justify="center" align="center" gap="10">
        <Heading as="h2" textAlign="center" fontWeight="bold">
          AIC-IIITKottayam Incubation Centre
        </Heading>
        <Flex gap="5" flexWrap="wrap" justify="center">
          {IncubationCards.map(
            ({ heading, description, Icon, link }, index) => (
              <Flex
                key={index}
                p="5"
                boxShadow="md"
                borderWidth="1px"
                flex="1"
                borderRadius="lg"
                direction="column"
                align="center"
                minWidth="350px"
                textAlign="center"
                transition="all ease 150ms"
                _hover={{
                  boxShadow: "lg",
                }}
              >
                <Icon size="3rem" color="#2291e2" />
                <Heading as="h3" mt="2" fontSize="xl">
                  {heading}
                </Heading>
                <Text my={4}>{description}</Text>
                <Link
                  mt="auto"
                  display="flex"
                  alignItems="center"
                  gap="1"
                  color="blue.400"
                  to={link}
                  as={ReachLink}
                >
                  Read More <HiExternalLink />
                </Link>
              </Flex>
            )
          )}
        </Flex>
      </Flex>
      <Flex direction="column" justify="center" align="center" gap="10">
        <Heading textAlign="center" as="h2" fontWeight="bold">
          AIC-IIITKottayam - Value Proposition
        </Heading>
        <Flex gap="5" flexWrap="wrap" justify="center">
          {ValuePropostionCards.map(({ heading, description, Icon }, index) => (
            <Flex
              key={index}
              p="5"
              py="7"
              borderRadius="lg"
              boxShadow="md"
              borderWidth="1px"
              flex="1"
              direction="column"
              minWidth="350px"
              transition="all ease 150ms"
              _hover={{
                boxShadow: "lg",
              }}
              gap="5"
            >
              <Flex align="center" gap="2">
                <Icon size="35" color="#2291e2" />
                <Heading as="h3" fontSize="xl">
                  {heading}
                </Heading>
              </Flex>
              <Flex direction="column">
                <Text>{description}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Details;
