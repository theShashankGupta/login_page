import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Button,
  Heading,
  Link,
  InputRightElement,
} from "@chakra-ui/react";
import App2 from "./username"
import App3 from "./password"

import React from 'react';
import './styles.css';

const LoginCard = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow="0px 8px 32px 0px rgba(0, 0, 0, 0.08), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);"
          padding="40px"
          width="600px"
        >
          <Stack spacing={4} >
            <form method="post" action="/api/login">
            <Heading fontSize="40px" mb={6}>
              Sign in to get started
            </Heading>
            
              <App2/>

              <App3/>
            
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Keep Me Login</Checkbox>
                <Link color="black" textDecor={"underline"}>
                  Forgot password?
                </Link>
              </Stack>
              <Button bg="#007AFF" color={"white"} type="submit"  >
                Sign in
              </Button>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginCard;
