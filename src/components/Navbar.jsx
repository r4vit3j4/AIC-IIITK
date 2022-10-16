import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const AboutUsList = [
  {
    title: "Who are We?",
    link: "/summary",
  },
  {
    title: "Board of Members",
    link: "/board",
  },
  {
    title: "Our Team",
    link: "/team",
  },
  {
    title: "Our Mentors",
    link: "/mentors",
  },
];

const NewsEventsList = [
  {
    title: "News",
    link: "/news",
  },
  {
    title: "SIA",
    link: "/sia",
  },
];

const ApplyList = [
  {
    title: "Seed Fund",
    link: "/sisfs",
  },
  {
    title: "Start-Up in AIC",
    link: "/sia",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Incubates",
    link: "/#",
  },
  {
    title: "Mentors",
    link: "/#",
  },
  {
    title: "Partners",
    link: "/#",
  },
  {
    title: "Nodal Centers",
    link: "/#",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      w="100%"
      p="3"
      justify="center"
      position="sticky"
      top="0"
      background="white"
      borderBottom="1px solid #EEE"
      boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    >
      <Flex w="100%" maxW="6xl" justify="space-between" align="center">
        <Image
          boxSize="3.75rem"
          width="3.75rem"
          height="3.75rem"
          objectFit="contain"
          src="/assets/logos/nlogo.png"
          alt="logo"
        />
        {/* Renders above lg */}
        <Show above="lg">
          <Flex gap="4">
            <Button size="sm" variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Menu>
              <MenuButton size="sm" as={Button} variant="ghost">
                <Flex align="center" gap="1">
                  About Us <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                {AboutUsList.map((item, index) => (
                  <MenuItem key={index}>
                    <Link style={{ width: "100%" }} to={item.link}>
                      {item.title}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton size="sm" as={Button} variant="ghost">
                <Flex align="center" gap="1">
                  News-Events <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                {NewsEventsList.map((item, index) => (
                  <MenuItem key={index}>
                    <Link style={{ width: "100%" }} to={item.link}>
                      {item.title}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Button size="sm" variant="ghost">
              <Link to="/startup">Out Start-ups</Link>
            </Button>
            <Menu>
              <MenuButton size="sm" as={Button} variant="ghost">
                <Flex align="center" gap="1">
                  Apply Now <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                {ApplyList.map((item, index) => (
                  <MenuItem key={index}>
                    <Link style={{ width: "100%" }} to={item.link}>
                      {item.title}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Button size="sm" variant="ghost">
              <Link to="/gallery">Gallery</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link to="/#contact">Contact</Link>
            </Button>
          </Flex>
        </Show>
        {/* Mobile Nav */}
        {/* Is hidden above lg */}
        <Hide above="lg">
          <Button ref={btnRef} onClick={onOpen}>
            <HiMenuAlt3 size={"1.5rem"} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton size={2} top={10} right={10} />

              <DrawerBody mt={28} pb={10}>
                <Flex flexDirection={"column"}>
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <AccordionButton as={Link} to="/" onClick={onClose}>
                        Home
                      </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton>
                        About Us <FiChevronDown />
                      </AccordionButton>
                      <AccordionPanel>
                        <Flex flexDirection={"column"}>
                          {AboutUsList.map((item, index) => (
                            <Box key={index} py={1}>
                              <Link to={item.link} onClick={onClose}>
                                {item.title}
                              </Link>
                            </Box>
                          ))}
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton>
                        News-Events <FiChevronDown />
                      </AccordionButton>
                      <AccordionPanel>
                        <Flex flexDirection={"column"}>
                          {NewsEventsList.map((item, index) => (
                            <Box key={index} py={1}>
                              <Link to={item.link} onClick={onClose}>
                                {item.title}
                              </Link>
                            </Box>
                          ))}
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton
                        as={Link}
                        to="/startup"
                        onClick={onClose}
                      >
                        Our Start-ups
                      </AccordionButton>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        Apply Now <FiChevronDown />
                      </AccordionButton>
                      <AccordionPanel>
                        <Flex flexDirection={"column"}>
                          {ApplyList.map((item, index) => (
                            <Box key={index} py={1}>
                              <Link to={item.link} onClick={onClose}>
                                {item.title}
                              </Link>
                            </Box>
                          ))}
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton
                        as={Link}
                        to="/gallery"
                        onClick={onClose}
                      >
                        Gallery
                      </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton
                        as={Link}
                        to="/#contact"
                        onClick={onClose}
                      >
                        Contact
                      </AccordionButton>
                    </AccordionItem>
                  </Accordion>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Hide>
      </Flex>
    </Flex>
  );
};

export default Navbar;
