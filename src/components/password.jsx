import React from 'react';
import {
    Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,
    Text,useColorModeValue,Link,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


function TextInput({ type = 'text', label }) {
const [value, setValue] = useState('');
const [showPassword, setShowPassword] = useState(false);
function handleChange(e) {
    setValue(e.target.value);
}

return (
    <div className="input-container">
    
    
    <InputGroup>
        <Input type={showPassword ? 'text' : 'password'} value={value} onChange={handleChange} />
        <label className={value && 'filled'} >
        {label}
        </label>
        <InputRightElement h={'full'}>
        <Button
            variant={'ghost'}
            onClick={() =>
            setShowPassword((showPassword) => !showPassword)
            }>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
        </InputRightElement>
    </InputGroup>
    </div>
);
}


export default function password() {
return (
    <div className="App">
    <form>
        <TextInput label="Password" />
    </form>
    </div>
);
}
  