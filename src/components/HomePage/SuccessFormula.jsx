import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import React from "react";
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image
    objectFit="contain"
    src="/assets/images/success/1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    w="full"
    h="fit-content"
    maxH="500"
  />,
  <Image
    objectFit="contain"
    src="/assets/images/success/2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    w="full"
    h="fit-content"
    maxH="500"
  />,
  <Image
    objectFit="contain"
    src="/assets/images/success/3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    w="full"
    h="fit-content"
    maxH="500"
  />,
  <Image
    objectFit="contain"
    src="/assets/images/success/4.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    w="full"
    h="fit-content"
    maxH="500"
  />,
  <Image
    objectFit="contain"
    src="/assets/images/success/5.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    w="full"
    h="fit-content"
    maxH="500"
  />,
  <Image
    objectFit="contain"
    src="/assets/images/success/6.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    w="full"
    h="fit-content"
    maxH="500"
  />,
];

const SuccessFormula = () => {
  return (
    <Flex
      w="full"
      justify="center"
      bg="#fafafa"
      borderY="1px solid #e1e1e1"
      boxShadow="sm"
    >
      <Flex py="100" gap="5" direction="column" px="4" w="full" maxW="6xl">
        <Box>
          <Heading as="h2" fontWeight="bold">
            Success Formula Of AIC-IIITKottayam
          </Heading>
          <Text mt="10" mb="5">
            The success formula framed at AIC-IIITKottayam will include the
            following ingredients:
          </Text>
          <List spacing={5}>
            <ListItem>
              <ListIcon
                as={HiCheck}
                height="1.25rem"
                width="1.25rem"
                color="green.500"
              />
              We keep our partners, including mentors, very close to our
              customers.{" "}
              <Link
                target="_blank"
                href="https://goo.gl/forms/5BGUvajn6IoUryqF3"
                color="blue.400"
              >
                Apply Now
              </Link>{" "}
              for recognition.
            </ListItem>
            <ListItem>
              <ListIcon
                as={HiCheck}
                color="green.500"
                height="1.25rem"
                width="1.25rem"
              />
              The strength of the partners will be reaped in to the centre. For
              instance, IISER-TVM is a sort of knowledge park. We will include
              their strengths by directly connecting experts to our customers.
            </ListItem>
            <ListItem>
              <ListIcon
                as={HiCheck}
                color="green.500"
                height="1.25rem"
                width="1.25rem"
              />
              We expand the networking (contacts) with the support of the
              proposed partners for attracting a few more customers in the long
              run.
            </ListItem>
            <ListItem>
              <ListIcon
                as={HiCheck}
                color="green.500"
                height="1.25rem"
                width="1.25rem"
              />
              We inspire our partners and customers to submit a few innovative
              R&D projects so that the expertise level of AIC-IIITKottayam will
              be increased.
            </ListItem>
            <ListItem>
              <ListIcon
                as={HiCheck}
                color="green.500"
                height="1.25rem"
                width="1.25rem"
              />
              We periodically verify and satisfy the existing customers so that
              they will remain as an indirect advertisement medium of the
              centre.{" "}
              <Link
                href="https://goo.gl/forms/5BGUvajn6IoUryqF3"
                color="blue.400"
                target="_blank"
              >
                Apply Now
              </Link>{" "}
              for recognition.
            </ListItem>
          </List>
        </Box>
        <Box w="full">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={3000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            disableButtonsControls
            responsive={{
              0: {
                items: 1,
              },
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default SuccessFormula;
