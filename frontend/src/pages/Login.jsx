import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLogin } from "../redux/userLogin/userLogin.action";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";

const Login = () => {
  const { isAuth, isError } = useSelector((store) => store.userLogin);
  const dispatch = useDispatch();
  // console.log(isAuth, token, isError, process.env.REACT_APP_MAIN_URL)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuth) {
    return <Navigate to="/workspace" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email: email, password: password }));
  };

  return (
    <div>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={6}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={5}
          my={12}
          alignItems={"center"}
        >
          <Image src={""} width={"30%"} />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            User
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl id="email" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Email address</FormLabel>
              <Input
                placeholder="your-email@gmail.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={6} alignItems={"center"}>
              <Button
                width={"200px"}
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      {isError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Wrong Credentials</AlertTitle>
          <AlertDescription>
            Please Add Correct Email And Password
          </AlertDescription>
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
