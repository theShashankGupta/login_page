import React from 'react';
import {
    Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,
    Text,useColorModeValue,Link,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


function TextInput({ type = 'password', label = 'Password', onChange }) {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    function handleChange(e) {
      const newValue = e.target.value;
      setValue(newValue);
      onChange(newValue); // Call the prop function with the updated value
    }
  
    return (
      <div className="input-container">
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
          />
          <label className={value && 'filled'}>{label}</label>
          <InputRightElement h={'full'}>
            <Button
              variant={'ghost'}
              onClick={() => setShowPassword((show) => !show)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
    );
  }
  
  export default function Password({ onChange }) {
    return (
      <div className="App">
        <TextInput label="Password" onChange={onChange} />
      </div>
    );
  }
  