import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Show,
  VStack,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Icon } from "@chakra-ui/react";
import { HashLink as NavLink } from "react-router-hash-link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaHackerrank } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import styles from "../pages/Skills.module.css";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const scrollToSection = (section) => {
    section.scrollIntoView({ behavior: "smooth" });
  };
  const handleResume = () => {
    return window.open(
      "https://drive.google.com/file/d/1Du9A6lRvG6AcKc6gK1t50s3Xdrl9ayrG/view?usp=share_link"
    );
  };

  return (
    <>
      <Flex
        flex="1"
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="teal.300"
        pos="fixed"
        w="100%"
        zIndex={2}
        p={'0.6rem'}
        h={{
          md: "4rem",
        }}
        justifyContent={"left"}
        pr="340px"
      >
        <Spacer />
        <Show breakpoint="(min-width: 425px)">
          <ButtonGroup
            gap="6"
            display={{
              md: "flex",
            }}
            p={"8px 0px"}
            justifyContent="center"
          >
            <NavLink smooth to="#home">
              <Button colorScheme="teal" variant="outline">
                Home
              </Button>
            </NavLink>
            <NavLink smooth to="#about">
              <Button colorScheme="teal" variant="outline">
                About
              </Button>
            </NavLink>
            <NavLink smooth to="#skills">
              <Button colorScheme="teal" variant="outline">
                Skills
              </Button>
            </NavLink>
            <NavLink smooth to="#projects">
              <Button colorScheme="teal" variant="outline">
                Projects
              </Button>
            </NavLink>
            <NavLink smooth to="#contacts">
              <Button colorScheme="teal" variant="outline">
                Contacts
              </Button>
            </NavLink>
            <a href="/files/Ashish-Chaudhary-Resume.pdf" download>
              <Button
                onClick={handleResume}
                colorScheme="teal"
                variant="outline"
              >
                Resume <Icon as={DownloadIcon} />
              </Button>
            </a>
          </ButtonGroup>
        </Show>
        <Box
          display={{
            sm: "none",
            md: "none",
          }}
          m={"0px 210px 0px 0px"}
        >
          <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon/>
          </Button>

          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"xs"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack  >
                  <ScrollLink
                    
                    to="home"
                    smooth
                    onClick={() =>
                      scrollToSection(document.getElementById("home"))
                    }
                  >
                    <Button  onClick={onClose}>Home</Button>
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    smooth
                    onClick={() =>
                      scrollToSection(document.getElementById("about"))
                    }
                  >
                    <Button onClick={onClose}>About</Button>
                  </ScrollLink>
                  <ScrollLink
                    to="skills"
                    smooth
                    onClick={() =>
                      scrollToSection(document.getElementById("skills"))
                    }
                  >
                    <Button onClick={onClose}>Skills</Button>
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    smooth
                    onClick={() =>
                      scrollToSection(document.getElementById("projects"))
                    }
                  >
                    <Button onClick={onClose}>Projects</Button>
                  </ScrollLink>
                  <ScrollLink
                    to="contacts"
                    smooth
                    onClick={() =>
                      scrollToSection(document.getElementById("contacts"))
                    }
                  >
                    <Button onClick={onClose}>Contact</Button>
                  </ScrollLink>
                  <a
                    href="/files/Ashish-Chaudhary-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button onClick={handleResume}>
                      Resume
                      <Icon as={DownloadIcon} />
                    </Button>
                  </a>
                </VStack>
              </DrawerBody>
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
