import logo from "../assets/LoginLogo.png";
import { Center, HStack, Image, Flex } from "@chakra-ui/react";
import LoginCard from "./LoginCard";

const Login = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        // justify={"center"}
      >
        <Image marginX="70px" src={logo} width="368px" height="322px"/>
        <LoginCard />
      </Flex>
    </>
  );
};

export default Login;
