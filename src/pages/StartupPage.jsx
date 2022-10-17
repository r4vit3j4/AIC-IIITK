import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const StartupPage = () => {
  return (
    <Box>
      <Box bg="black" h={150} p={4} my={10} color="white">
        <Box align="center">
          <Text fontSize="4xl" fontWeight="bold">
            Start-Up In AIC-IIITKottayam
          </Text>
        </Box>
        <Box align="center">
          <Text fontSize="xl" fontWeight="bold">
            <Link to="/home">Home</Link>
          </Text>
        </Box>
      </Box>

      <Box bg="white" h="100%" p={4} my={20} mx={20} color="gray">
        <Box align="center">
          <Text fontSize="4xl" fontWeight="bold">
            Start-Up In AIC
          </Text>
        </Box>

        <Box mt={10} fontSize="2xl" fontWeight="semibold" color="gray">
          <Text>
            AIC-IIIT Kottayam is inviting applications for its 1st cohort of
            SIA- Start-Up-In AIC.
          </Text>
          <Text>
            AIC(Atal Incubation Centre) IIIT Kottayam is a sec 8 non profit
            organization under AIM-NITI scheme of Government of India.
          </Text>
          <Text>
            SIA is a support scheme for budding entrepreneurs at AIC-IIIT
            Kottayam.
          </Text>

          <Box>
            <Text my={10}>Features:</Text>
          </Box>

          <Box>
            <Text fontSize="15px">
              -Structured Launch Program in partnership with Global Leaders
            </Text>
            <Text fontSize="15px">
              - Complete support from Idea Validation, Ip, Marketing, Seed
              funding and Acceleration.
            </Text>
          </Box>

          {/* //stamp */}

          <Box my={10}>
            <Text fontSize="10px">
              *Stamp Duty and other Govt fees, if any are not included
            </Text>
          </Box>


          <Box align="center" >

          <Button colorScheme='green'>
            <Link>Apply here</Link>
            
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StartupPage;
