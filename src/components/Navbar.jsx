import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Show,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaHackerrank } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import styles from "../pages/Skills.module.css";

const Navbar = () => {
  const handleResume = () => {
    return window.open(
      "https://drive.google.com/file/d/1NfQwkYj1_q0VyVGcjxEoAJBWImEU5ceG/view?usp=share_link"
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
        h={{
          md: "4rem",
        }}
        justifyContent={"left"}
        pr="340px"
      >
    
        <Spacer />
        <Show breakpoint='(min-width: 425px)'>
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
            <NavLink smooth to="#contact">
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
            sm:"none",
            md:"none"
          }}
          m={"0px 210px 0px 0px"}
          
        >

        <Menu
          display={{
            sm: "block",
            md: "none",
          }}
        >
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon color="white" fontSize="2rem" />}
            // icon={<GiHamburgerMenu color="white" fontSize="2rem"/>}
            variant="outline"
          />

          <MenuList>
            <MenuItem>
              <NavLink smooth to="#home">
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink smooth to="#skills">
                Skills
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink smooth to="#projects">
                Projects
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink smooth to="#contact">
                Contacts
              </NavLink>
            </MenuItem>
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
          </MenuList>
        </Menu>

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
