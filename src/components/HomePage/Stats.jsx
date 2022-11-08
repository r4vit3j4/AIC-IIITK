import { Flex, Text, Icon as ChakraIcon } from "@chakra-ui/react";
import React from "react";
import { MdWork } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaSignature, FaBuilding } from "react-icons/fa";

const StatsContent = [
  {
    title: "Number of Startups",
    value: "42",
    Icon: FaBuilding,
  },
  {
    title: "Jobs Created",
    value: "141",
    Icon: MdWork,
  },
  {
    title: "Submissions",
    value: "12",
    Icon: RiFilePaper2Fill,
  },
  {
    title: "IP generated",
    value: "11",
    Icon: FaSignature,
  },
];

const Stats = () => {
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
        ),url('/assets/images/slider/slider1.jpg')"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py="100"
    >
      {StatsContent.map(({ title, value, Icon }, index) => (
        <Flex
          direction="column"
          key={index}
          alignItems="center"
          width="175px"
          color="white"
        >
          <ChakraIcon as={Icon} w={10} h={10} color="blue.400" mb={2} />
          <Text fontSize={"4xl"} fontWeight="bold">
            {value}
          </Text>
          <Text>{title}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Stats;
