import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
const About = () => {
  return (
    <VStack
      h="auto"
      p={{
        base: "10px",
        sm: "15px",
        md: "1rem",
      }}
      w="90%"
      m="1rem auto"
      bg="whitesmoke"
    >
      <Heading>About</Heading>
      <Text w="60%" fontSize={"3xl"}>
        I am very passionate in software industry from my collage time. I have
        sound understanding computer fundamental, Data structure, programming
        languages and framework/library.
      </Text>
    </VStack>
  );
};

export default About;
