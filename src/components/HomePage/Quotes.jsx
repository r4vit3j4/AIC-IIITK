import { Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

import AliceCarousel from "react-alice-carousel";

const items = [
  <Flex
    direction="column"
    textColor="white"
    gap="3"
    align={["center", "center", "center", "flex-start"]}
  >
    <Flex align="center" gap="3">
      <Avatar name="Albert Einstein" src="/assets/avatars/1.jpg" />
      <Text fontWeight="bold" fontSize="2xl">
        Albert Einstein
      </Text>
    </Flex>
    <Flex
      direction="column"
      align={["center", "center", "center", "flex-start"]}
    >
      <Text fontSize="md">"In the middle of difficulty lies oppurtunity"</Text>
    </Flex>
  </Flex>,
  <Flex
    direction="column"
    textColor="white"
    gap="3"
    align={["center", "center", "center", "flex-start"]}
  >
    <Flex align="center" gap="3">
      <Avatar name="Albert Einstein" src="/assets/avatars/2.jpg" />
      <Text fontWeight="bold" fontSize="2xl">
        A.P.J Abdul Kalam
      </Text>
    </Flex>
    <Flex
      direction="column"
      gap="3"
      align={["center", "center", "center", "flex-start"]}
    >
      <Text fontSize="md">
        "Dream, Dream, Dream. Dream transforms into thoughts, and thoughts
        result in action"
      </Text>
      <Text fontSize="md">
        "We should not give up and we should not allow the problem to defeat us"
      </Text>
    </Flex>
  </Flex>,
];

const Quotes = () => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      gap="30"
      bgImage="linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),url('/assets/images/sky.jpg')"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py="100"
    >
      <Flex justify="center" w="full" maxW="5xl" p="4">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          animationDuration={1000}
          animationType="slide"
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 2,
            },
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Quotes;
