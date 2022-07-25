import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Input,
  Text,
  Image,
  Square,
  Link,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({});

  const handleLogin = () => {

    let payload = JSON.stringify(login);
    fetch("https://everhourbackend.herokuapp.com/auth/login", {
      headers: {
        "content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.token){
          localStorage.setItem("userid", JSON.stringify(res._id))
          navigate("/task")
        }else{
          alert(res.message)
        }
        })
      .catch((err) => console.log(err));
    // axios
    //   .post("https://everhourbackend.herokuapp.com/auth/login", login)
    //   .then((r) => {
    //     localStorage.setItem("userid", JSON.stringify(r.data._id));
    //     navigate("/task");
    //   });
  };

  return (
    <Box>
      <Center>
        <Box>
          <Center>
            <Text fontSize="4xl" fontWeight="600">
              Log in to Everhour
            </Text>
          </Center>
          <Center>
            <Text
              margin="10px 0px 20px"
              fontWeight="400"
              fontSize="18px"
              color="#7F7F7F"
            >
              Using the former version of Everhour? Please{" "}
              <Link color="#00bef8">login here</Link>
            </Text>
          </Center>
        </Box>
      </Center>
      <br />
      <Center>
        <Square
          bg="white"
          size="400px"
          w="690px"
          boxShadow="md"
          p="5"
          rounded="md"
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            <Center>
              <Button
                bg="white"
                size="md"
                height="48px"
                width="265px"
                border="2px"
                borderColor="grey"
              >
                <Icon as={FcGoogle} fontSize="22px" />
                &nbsp;
                <Text fontSize="10px">Login with Google Account</Text>
              </Button>
            </Center>
            <Center>
              <Text>or</Text>
            </Center>

            <Center>
              <Input
                onChange={(e) =>
                  setLogin({ ...login, [e.target.name]: e.target.value })
                }
                name="username"
                placeholder="username"
                borderRadius="5px"
                h="40px"
                w="270px"
                fontSize="13px"
                size="lg"
              />
            </Center>
            <br />

            <Center>
              <Input
                onChange={(e) =>
                  setLogin({ ...login, [e.target.name]: e.target.value })
                }
                name="password"
                placeholder="Password"
                borderRadius="5px"
                h="40px"
                w="270px"
                fontSize="13px"
                size="lg"
              />
            </Center>
            <br />
            <Center>
              <Button
                onClick={handleLogin}
                bg={"#56BB70"}
                color="white"
                size="xl"
                fontSize="19px"
                fontWeight="400"
                padding="12px 59px"
                borderRadius={"3px"}
                _hover={{ bg: "#56BB70", color: "white", boxShadow: "dark-lg" }}
              >
                Log in
              </Button>
            </Center>
          </Grid>
        </Square>
      </Center>

      <Center>
        <Box mt="50px">
          <Center>
            <Text fontSize="34px" fontWeight="500" color="#323233">
              New to Everhour?
            </Text>
          </Center>

          <Text
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            Try Everhour for free and see if it works for your business
          </Text>
          <Flex gap={4}>
            <Input
              placeholder="Work email..."
              borderRadius="5px"
              fontSize="12px"
              size="sm"
            />
            <Button
              bg={"#56BB70"}
              color="white"
              size="sm"
              fontSize="10px"
              fontWeight="400"
              padding="5px 32px"
              borderRadius={"3px"}
              _hover={{ bg: "#56BB70", color: "white", boxShadow: "dark-lg" }}
            >
              Try it free
            </Button>
          </Flex>
          <Flex
            margin="10px 0 70px 0"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Icon as={FcGoogle} fontSize="22px" />
            &nbsp;
            <Text fontSize="10px">Or sign up with Google Account</Text>
          </Flex>
        </Box>
      </Center>

      <Image
        marginTop="-70px"
        padding="0 40px"
        height="142px"
        width="100%"
        src="/logo/bottom_pic.png"
        alt=""
      />
    </Box>
  );
};

export default Login;
