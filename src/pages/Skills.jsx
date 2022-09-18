import { Box, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiRedux, SiChakraui } from "react-icons/si";
import { BsFillBootstrapFill, BsWordpress } from "react-icons/bs";
import styles from "./Skills.module.css";

const Skills = () => {
  function Example() {
    return <Icon as={MdCheckCircle} />;
  }
  return (
    <VStack
      h={{
        base: "auto",
        sm: "auto",
        md: "auto",
      }}
      p="2rem"
      w="90%"
      m="1.5rem auto"
      bg="whitesmoke"
    >
      <Heading>Skills</Heading>
      <Flex
        gap="3rem"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "space-between",
        }}
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
        w={{
          base: "70%",
          sm: "70%",
          md: "90%",
          lg: "70%",
        }}
      >
        <Box
          data-content="HTML"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    
        >
          <div className={styles.skillSpin}>
            <AiFillHtml5 color="orange" />
          </div>
        </Box>

        <Box
          data-content="CSS"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // _hover={{
          //   fontSize: "130px",
          // }}
        >
          <div className={styles.skillSpin}>
            <DiCss3 color="lightblue" />
          </div>
        </Box>
        <Box
          data-content="JS"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // _hover={{
          //   fontSize: "130px",
          // }}
        >
          <div className={styles.skillSpin}>
            <DiJavascript1 color="orangered" />
          </div>
        </Box>
        <Box
          data-content="REACT"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // _hover={{
          //   fontSize: "130px",
          // }}
        >
          <div className={styles.skillSpin}>
            <DiReact color="skyblue" />
          </div>
        </Box>
      </Flex>

      <Flex
        gap="3rem"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "space-between",
        }}
        mt="5rem"
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
        w={{
          base: "70%",
          sm: "70%",
          md: "90%",
          lg: "70%",
        }}
      >
        <Box
          data-content="REDUX"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
       
        >
          <div className={styles.skillSpin}>
            <SiRedux color="#764abc" />
          </div>
        </Box>
        <Box
          data-content="CHAKRA"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          
        >
          <div className={styles.skillSpin}>
            <SiChakraui color="#6fcad0" />
          </div>
        </Box>
        <Box
          data-content="BOOTSTRAP"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        
        >
          <div className={styles.skillSpin}>
            <BsFillBootstrapFill color="#6fcad0" />
          </div>
        </Box>
        <Box
          data-content="WORDPRESS"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <div className={styles.skillSpin}>
            <BsWordpress color="#6fcad0" />
          </div>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Skills;
