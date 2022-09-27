import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const toast = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f62zti9",
        "template_54wc3jq",
        form.current,
        "uv-js2PrF-qA18pVR"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            position: "top",
            title: "Thank you for connect with us",
            status: "success",
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      
      <Flex
        h="auto"
        display={{
          base:"block",
          sm:"block",
          md:"flex"
        }}
        p={{
          base: "10px",
          sm: "15px",
          md: "2rem",
        }}
        w="90%"
        m="1rem auto"
        bg="whitesmoke"
      >
        <Box
          w={{
            base: "80%",
            sm: "80%",
            md: "60%",
          }}
          // boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          // m="auto"
          p="10px"
          borderRadius={3}
          textAlign="left"
          // bg="white"
          
        >
         <Heading size="sm" lineHeight="2em">{`Email:- ashishchaudhary3639@gmail.com`}</Heading>
         <Heading size="sm" lineHeight="2em">{`Phone:- +91 9161610139`}</Heading>
         <Heading size="sm" lineHeight="2em">{`Address:- Siddharth Nagar, Uttar Pradesh, India, 272192`}</Heading>
        </Box>
        <Box
          w={{
            base: "80%",
            sm: "80%",
            md: "60%",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          m="auto"
          p="10px"
          borderRadius={3}
          textAlign="center"
          bg="white"
        >
          <form ref={form} onSubmit={sendEmail}>
            <Input
              placeholder="Enter Name"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="user_name"
            />
            <br />
            <br />
            <Input
              placeholder="Enter Phone"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="user_phone"
            />
            <br />
            <br />
            <Input
              placeholder="Enter Email"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="user_email"
            />
            <br />
            <br />
            <Textarea
              placeholder="Enter Massage"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="message"
            />
            <br />
            <br />
            <Button
              color="white"
              border="none"
              w="70%"
              fontSize="22px"
              bg="teal"
              _hover={{ cursor: "pointer", bg: "tomato", w: "71%" }}
              borderRadius={3}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
