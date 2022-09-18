import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Show,
  RadioGroup,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavHashLink } from "react-router-hash-link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import styles from "../pages/Skills.module.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="teal.300"
        pos="fixed"
        w="100%"
        zIndex={2}
        h={{
          md: "4rem",
        }}
        justifyContent={{
          sm: "center",
          md: "center",
        }}
      >
        <Box
          p="2"
          visibility={{
            sm:"hidden",
            md: "visible",
            lg: "visible",
          }}
        >
          <Heading size="md">Excuse Me</Heading>
        </Box>
   
        <Spacer />
        <Show above="sm">
          <ButtonGroup
            gap="6"
            display={{
              base: "none",
              sm: "flex",
              md: "flex",
            }}
          >
            <NavHashLink to="#home">
              <Button colorScheme="teal" variant="outline">
                Home
              </Button>
            </NavHashLink>

            <NavHashLink to="#skills">
              <Button colorScheme="teal" variant="outline">
                Skills
              </Button>
            </NavHashLink>
            <NavHashLink to="#projects">
              <Button colorScheme="teal" variant="outline">
                Projects
              </Button>
            </NavHashLink>
            <NavHashLink to="#contact">
              <Button colorScheme="teal" variant="outline">
                Contacts
              </Button>
            </NavHashLink>
          </ButtonGroup>
        </Show>
        <Box
          display={{
            sm: "none",
            md: "none",
          }}
          pr="1rem"
        >
          {" "}
          <RadioGroup
            defaultValue={placement}
            onChange={setPlacement}
          ></RadioGroup>
          <Button colorScheme="blue" onClick={onOpen}>
            <GiHamburgerMenu color="white" fontSize="25px" />
          </Button>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent textAlign="center">
              <NavHashLink to="#home">
                <Button colorScheme="teal" variant="outline" w="100%">
                  Home
                </Button>
              </NavHashLink>

              <NavHashLink to="#skills">
                <Button colorScheme="teal" variant="outline" w="100%">
                  Skills
                </Button>
              </NavHashLink>

              <NavHashLink to="#projects">
                <Button colorScheme="teal" variant="outline" w="100%">
                  Projects
                </Button>
              </NavHashLink>

              <NavHashLink to="#contact">
                <Button colorScheme="teal" variant="outline" w="100%">
                  Contacts
                </Button>
              </NavHashLink>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
      <VStack
        gap="10px"
        borderRadius="8px"
        w="4%"
        h="auto"
        position="fixed"
        bottom={{
          base: "3",
          sm: "2",
          md: "5",
        }}
        ml="11px"
        p="12px"
    
      >
        <div className={styles.skillSpin}>
          <Link href="https://github.com/AshishChaudhary3639" isExternal>
            <BsGithub fontSize="2.5rem" />
          </Link>
        </div>
        <div className={styles.skillSpin}>
          <Link
            href="https://www.linkedin.com/in/ashish-chaudhary-216b23186/"
            isExternal
          >
            <BsLinkedin fontSize="2.5rem" color="#0a66c2" />
          </Link>
        </div>

        <div className={styles.skillSpin}>
          <Link href="https://www.hackerrank.com/ashishchaudhar11" isExternal>
            <FaHackerrank fontSize="2.5rem" color="#2ab85e" />
          </Link>
        </div>
      </VStack>
    </>
  );
};

export default Navbar;
