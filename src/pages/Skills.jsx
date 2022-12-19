import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiRedux, SiChakraui,SiExpress,SiMongodb } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import {FaNode} from "react-icons/fa"
import styles from "./Skills.module.css";

const Skills = () => {

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
        gap="2.5rem"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
        }}
        p="0px 20px"
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
        w={{
          base: "70%",
          sm: "60%",
          md: "90%",
          lg: "70%",
        }}
      >
        <Box
          data-content="HTML"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    
        >
          <div className={styles.skillSpin}>
            <AiFillHtml5 color="orange" className={styles.skills_grid_item}/>
          </div>
        </Box>

        <Box
          data-content="CSS"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // _hover={{
          //   fontSize: "130px",
          // }}
        >
          <div className={styles.skillSpin}>
            <DiCss3 color="lightblue" className={styles.skills_grid_item}/>
          </div>
        </Box>
        <Box
          data-content="JS"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // _hover={{
          //   fontSize: "130px",
          // }}
        >
          <div className={styles.skillSpin}>
            <DiJavascript1 color="orangered" className={styles.skills_grid_item}/>
          </div>
        </Box>
        <Box
          data-content="REACT"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // _hover={{
          //   fontSize: "130px",
          // }}
        >
          <div className={styles.skillSpin}>
            <DiReact color="skyblue" className={styles.skills_grid_item}/>
          </div>
        </Box>
        <Box
          data-content="REDUX"
          
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
       
        >
          <div className={styles.skillSpin}>
            <SiRedux color="#764abc" className={styles.skills_grid_item}/>
          </div>
        </Box>
      </Flex>

      <Flex
        gap="2.5rem"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
        }}
        p="0px 20px"
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
          data-content="CHAKRA"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          
        >
          <div className={styles.skillSpin}>
            <SiChakraui color="#6fcad0" className={styles.skills_grid_item}/>
          </div>
        </Box>
        <Box
          data-content="BOOTSTRAP"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        
        >
          <div className={styles.skillSpin} id={styles.skills_grid_item}>
            <BsFillBootstrapFill color="#6fcad0" className={styles.skills_grid_item} />
          </div>
        </Box>
        <Box
          data-content="NODEJS"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <div className={styles.skillSpin}>
            <FaNode color="#026e00" className={styles.skills_grid_item}/>
          </div>
        </Box>
        <Box
          data-content="EXPRESS"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <div  className={styles.skillSpin}>
            <SiExpress  className={styles.skills_grid_item}/>
          </div>
        </Box>
        <Box
          data-content="MONGODB"
          fontSize="90px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <div className={styles.skillSpin}>
            <SiMongodb color="#00ed64" className={styles.skills_grid_item}/>
          </div>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Skills;
