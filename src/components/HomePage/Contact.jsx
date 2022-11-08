import {
  Icon as ChakraIcon,
  Flex,
  Heading,
  Text,
  Link,
  Input,
  Button,
  Box,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const contactList = [
  {
    title: "Phone/Whatsapp",
    value: "+91-482-2202155, +91-9443543746",
    Icon: HiPhone,
  },
  {
    title: "Email",
    value: "incubate@iiitkottayam.ac.in",
    Icon: HiMail,
  },
  {
    title: "Address",
    value: "Building no.340, Karoor Valavoor.P.O., Kottayam, Kerala 686635.",
    Icon: HiLocationMarker,
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitContactForm = (e) => {
    e.preventDefault();
    window.location = `mailto:incubate@iiitkottayam.ac.in?subject=${subject}&body=${message}`;
  };

  return (
    <Flex direction="column" align="center" w="full" maxW="6xl" py="100" px="4">
      <Heading id="contact" as="h2" mb="10">
        Contact
      </Heading>
      <Flex flexWrap="wrap" gap="5" mb="10">
        {contactList.map(({ title, value, Icon }, index) => (
          <Flex
            p="4"
            py="6"
            flex="1"
            key={index}
            direction="column"
            textAlign="center"
            align="center"
            minW="350px"
            boxShadow="md"
            borderWidth="1px"
            borderRadius="lg"
            transition="all ease 150ms"
            _hover={{
              boxShadow: "lg",
            }}
            gap="4"
          >
            <ChakraIcon as={Icon} height="12" width="12" color="blue.400" />
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            {title === "Email" ? (
              <Link href={`mailto:${value}`} isExternal={true} color="blue.400">
                {value}
              </Link>
            ) : (
              <Text color="gray.600">{value}</Text>
            )}
          </Flex>
        ))}
      </Flex>
      <Box w="full" maxW="lg" mt="10">
        <form onSubmit={(e) => submitContactForm(e)}>
          <Flex direction="column" w="full" maxW="4xl" gap="5">
            <Flex w="full" gap="5">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex>
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <Textarea
              name="message"
              type="text"
              placeholder="Send message to incubate@iiitkottayam.ac.in"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" colorScheme="telegram">
              Send Message
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Contact;
