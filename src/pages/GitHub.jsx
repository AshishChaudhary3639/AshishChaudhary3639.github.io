import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const GitHub = () => {
  return (
    <VStack
      h="auto"
      p={{
        base: "10px",
        sm: "15px",
        md: "2rem",
      }}
      w="90%"
      m="1rem auto"
      bg="whitesmoke"
    >
      <Heading>My code day</Heading>
      <GitHubCalendar username="AshishChaudhary3639" blockSize={15} />
    </VStack>
  );
};

export default GitHub;
