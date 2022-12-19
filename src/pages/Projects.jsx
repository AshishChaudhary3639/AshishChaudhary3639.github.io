import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import {  DiJavascript1, DiReact } from "react-icons/di";
import {TbBrandFirebase} from "react-icons/tb";
import { SiRedux, SiChakraui } from "react-icons/si";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Projects = () => {
  return (
    <>
      <VStack bg="whitesmoke" w="90%" m="auto" h="auto" pb="40px">
        <Heading>Projects</Heading>
        <Box
          w="80%"
          mt="2rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p="10px"
        >
          <Flex justifyContent="space-between" mb="20px">
            <Text as='b' fontSize='2xl' display={{
              base:"none",
              sm:"block"
            }}>Milaap</Text>
            <Flex gap="10px">
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="yellow"
              >
                <DiJavascript1 color="black" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                bg="#222222"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <DiReact color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiRedux color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <TbBrandFirebase color="yellow" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiChakraui color="skyblue" />
              </Box>
            </Flex>
          </Flex>
          <Image src={process.env.PUBLIC_URL + "/milaap.PNG"} />
          <Flex gap="2rem" justifyContent="center">
            <Link
              href="https://github.com/AshishChaudhary3639/milaap-clone"
              isExternal
            >
              <Button
                leftIcon={<BsGithub />}
                colorScheme="lightgray"
                variant="outline"
              >
                Code
              </Button>
            </Link>
            <Link
              href="https://6365231ddc409e0299100e43--frabjous-profiterole-b917b5.netlify.app/"
              isExternal
            >
              <Button
                leftIcon={<IoMdArrowDropupCircle />}
                colorScheme="lightgray"
                variant="outline"
              >
                Live
              </Button>
            </Link>
          </Flex>
        </Box>
      </VStack>
      <VStack bg="whitesmoke" w="90%" m="auto" h="auto" pb="40px">
        <Box
          w="80%"
          mt="2rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p="10px"
        >
          <Flex justifyContent="space-between" mb="20px">
            <Text as='b' fontSize='2xl' display={{
              base:"none",
              sm:"block"
            }}>Tripvillas</Text>
            <Flex gap="10px">
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="yellow"
              >
                <DiJavascript1 color="black" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                bg="#222222"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <DiReact color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiRedux color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiChakraui color="skyblue" />
              </Box>
            </Flex>
          </Flex>
          <Image src={process.env.PUBLIC_URL + "/tripvillas_img.PNG"} />
          <Flex gap="2rem" justifyContent="center">
            <Link
              href="https://github.com/AshishChaudhary3639/trip-villas-clone"
              isExternal
            >
              <Button
                leftIcon={<BsGithub />}
                colorScheme="lightgray"
                variant="outline"
              >
                Code
              </Button>
            </Link>
            <Link
              href="https://tripsvilla-clone-project.netlify.app/"
              isExternal
            >
              <Button
                leftIcon={<IoMdArrowDropupCircle />}
                colorScheme="lightgray"
                variant="outline"
              >
                Live
              </Button>
            </Link>
          </Flex>
        </Box>
      </VStack>
      <VStack bg="whitesmoke" w="90%" m="auto" h="auto">
        <Box
          w="80%"
          mt="2rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p="10px"
        >
          <Flex justifyContent="space-between" mb="20px">
            <Text as='b' fontSize='2xl' display={{
              base:"none",
              sm:"block"
            }}>Revv</Text>
            <Flex gap="10px">
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="yellow"
              >
                <DiJavascript1 color="black" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                bg="#222222"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <DiReact color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiRedux color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiChakraui color="skyblue" />
              </Box>
            </Flex>
          </Flex>
          <Image src={process.env.PUBLIC_URL + "/revv.PNG"} />
          <Flex gap="2rem" justifyContent="center">
          <Link
              href="https://github.com/AshishChaudhary3639/plastic-sheep-7678"
              isExternal
            >
              <Button
                leftIcon={<BsGithub />}
                colorScheme="lightgray"
                variant="outline"
              >
                Code
              </Button>
            </Link>
            <Link
              href="https://plastic-sheep-7678.vercel.app/"
              isExternal
            >
              <Button
                leftIcon={<IoMdArrowDropupCircle />}
                colorScheme="lightgray"
                variant="outline"
              >
                Live
              </Button>
            </Link>
          </Flex>
        </Box>
      </VStack>
    </>
  );
};

export default Projects;
