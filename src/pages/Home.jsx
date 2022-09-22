import { Box, Button, Flex, Heading, Icon, Image } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

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
            base: "left",
            sm: "center",
            md: "left",
          }}
        >
          <Box>
            <Heading size="xl">Hi</Heading>
            <h1 style={{fontSize:"3rem", fontWeight:"bold"}}>I am <span style={{color:"blue"}}>Ashish</span></h1>
            <Heading size="xl">
              
            <Typewriter
              options={{
                strings: ["A Full Stack Developer", "A MERN Stack Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
            </Heading>

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
