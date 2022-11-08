import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HiCheck } from "react-icons/hi";

const pricingCards = [
  {
    title: "Support Contracts",
    price: "₹5K",
    priceDuration: "month",
    features: [
      {
        feature: "Incubate space",
      },
      {
        feature: "Knowledge assistance",
      },
      {
        feature: "6 to 12 months",
      },
    ],
    registerLink: "https://goo.gl/forms/bYQ16uftJgLtssgr2",
  },
  {
    title: "Training Contract",
    price: "₹1K",
    priceDuration: "week",
    features: [
      {
        feature: "Incubate space",
      },
      {
        feature: "Training support",
      },
      {
        feature: "1 to 4 weeks",
      },
    ],
    registerLink: "https://goo.gl/forms/bYQ16uftJgLtssgr2",
  },
  {
    title: "Consultancy Contracts",
    price: "₹10K",
    priceDuration: "day",
    features: [
      {
        feature: "Onsite support",
      },
      {
        feature: "Consultancy support",
      },
      {
        feature: "Network support",
      },
    ],
    registerLink: "https://goo.gl/forms/bYQ16uftJgLtssgr2",
  },
];

const BusinessModel = () => {
  return (
    <Box py="100" w="full" maxW="6xl" px="4">
      <Heading as="h2" textAlign="center" mb="14">
        Business Model
      </Heading>
      <Flex w="full" flexWrap="wrap" gap="5">
        {pricingCards.map(
          ({ title, price, priceDuration, features, registerLink }, index) => (
            <Flex
              key={index}
              direction="column"
              flex="1"
              minW="350px"
              boxShadow="md"
              borderWidth="1px"
              borderRadius="lg"
              transition="all ease 150ms"
              _hover={{
                boxShadow: "lg",
              }}
              style={{
                contain: "paint",
              }}
            >
              <Flex
                direction="column"
                align="center"
                gap="5"
                p="4"
                bg="#F3FAFF"
                py="6"
                borderBottom="1px solid #e1e7f0"
              >
                <Text fontWeight="bold">{title}</Text>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="3xl">
                    {price}
                  </Text>
                  <Text>/{priceDuration}</Text>
                </Flex>
                <Button
                  as={Link}
                  href={registerLink}
                  colorScheme="telegram"
                  isExternal={true}
                  textDecoration="none !important"
                >
                  Register
                </Button>
              </Flex>
              <Flex direction="column" align="center" p="4" py="6">
                <List spacing={3}>
                  {features.map(({ feature }, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon
                        as={HiCheck}
                        height="1.25rem"
                        width="1.25rem"
                        color="green.500"
                      />
                      <Text>{feature}</Text>
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </Flex>
          )
        )}
      </Flex>
    </Box>
  );
};

export default BusinessModel;
