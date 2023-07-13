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
import Username from "./username"
import Password from "./password"
import axios from "axios";
import React from 'react';
import './styles.css';
import { useState } from 'react';

const handleLogin = async (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  try {
    const response = await axios.post('/api/auth', {
      Username: Username,
      Password: Password,
    });
    console.log(response.data); // Handle the response from the server
  } catch (error) {
    console.error('Error:', error); // Handle any errors that occurred during the request
  }
};

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg="white"
          boxShadow="0px 8px 32px 0px rgba(0, 0, 0, 0.08), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);"
          padding="40px"
          width="600px"
        >
          <Stack spacing={4}>
            <form onSubmit={handleLogin}>
              <Heading fontSize="40px" mb={6}>
                Sign in to get started
              </Heading>

              <Username onChange={handleUsernameChange} />
              <Password onChange={handlePasswordChange} />

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Keep Me Login</Checkbox>
                  <Link color="black" textDecor={'underline'}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button bg="#007AFF" color={'white'} type="submit">
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

