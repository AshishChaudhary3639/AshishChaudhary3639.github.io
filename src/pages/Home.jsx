import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
// import Typing from "react-typing-animation";

const Home = () => {
  return (
    <div>
      <Flex
        alignItems="center"
        gap="10px"
        direction={["column", "row", "row"]}
        justifyContent="center"
        w="90%"
        m="auto"
      >
        <Box w="37%" objectFit="cover">
          <Image
            src={process.env.PUBLIC_URL + "/ashish.jpg"}
            w={{
              base: "100%",
              sm: "100%",
              md: "60%",
            }}
            h="20rem"
            pt="20px"
            borderRadius="50%"
            border="3px solid gray"
            mt="4rem"
          />
        </Box>
        <Box
          w="60%"
          textAlign={{
            base: "center",
            sm: "center",
            md: "left",
          }}
        >
          <Box>
            <Heading size='2xl'>Hi</Heading>
            <Heading size='3xl'>I am Ashish</Heading>
            {/* <Typing loop='true'>
                      <Typing.Speed ms={50} />
                      <span>Web Developer</span>
                      <Typing.Delay ms={1000} />
                      <Typing.Backspace count={20} />
                      <span>Programmer</span>
                      <Typing.Delay ms={1000} />
                      <Typing.Backspace count={20} />
                     
                    </Typing> */}
          </Box>
          <Link
            to="/files/Ashish_chaudhary_Resume.pdf"
            target="_blanck"
            download
          >
            <Button colorScheme="teal" variant="outline" mt="1rem">
              Resume <Icon as={DownloadIcon} ml="6px" />
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
