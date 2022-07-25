import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Icon,
  Input,
  Text,
  Image,
  Square,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [sign, setSign] = useState({});

  const handleButton = () => {
    console.log(sign);
    let payload = JSON.stringify(sign);
    fetch("https://everhourbackend.herokuapp.com/auth/signup", {
      headers: {
        "content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err));
    // axios.post(`https://everhourbackend.herokuapp.com/auth/signup`,sign).then((r)=>{
    //      alert("sign up succesfully");
    //       navigate("/login")
    // });
  };

  return (
    <Box>
      <Center>
        <Box mt="50px">
          <Text fontSize="38px" fontWeight="600">
            Make your team more productive <br /> <Center>with Everhour</Center>{" "}
          </Text>

          <Text
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="14px"
            color="#7F7F7F"
          >
            Speed, flexibility, ability to integrate with the most popular
            project management software.
            <br />
            <Center>
              Everhour is a time tracking tool your team will actually use.
            </Center>
          </Text>

          <Center>
            <Input
              onChange={(e) =>
                setSign({ ...sign, [e.target.name]: e.target.value })
              }
              placeholder="name"
              name="name"
              borderRadius="5px"
              fontSize="12px"
              // size="sm"
              htmlSize={39}
              width="auto"
            />
          </Center>
          <br />
          <Center>
            <Input
              onChange={(e) =>
                setSign({ ...sign, [e.target.name]: e.target.value })
              }
              placeholder="username"
              name="username"
              borderRadius="5px"
              fontSize="12px"
              // size="sm"
              htmlSize={39}
              width="auto"
            />
          </Center>
          <br />
          <Center>
            <Input
              onChange={(e) =>
                setSign({ ...sign, [e.target.name]: e.target.value })
              }
              placeholder="email"
              name="email"
              borderRadius="5px"
              fontSize="12px"
              // size="sm"
              htmlSize={39}
              width="auto"
            />
          </Center>
          <br />
          <Center>
            <Input
              onChange={(e) =>
                setSign({ ...sign, [e.target.name]: e.target.value })
              }
              placeholder="password"
              name="password"
              borderRadius="5px"
              fontSize="12px"
              // size="sm"
              htmlSize={39}
              width="auto"
            />
          </Center>

          <br />
          <Center>
            <Button
              onClick={handleButton}
              bg={"#56BB70"}
              color="white"
              size="sm"
              fontSize="10px"
              fontWeight="400"
              padding="5px 32px"
              borderRadius={"3px"}
              _hover={{ bg: "#56BB70", color: "white", boxShadow: "dark-lg" }}
            >
              Get started
            </Button>
          </Center>
          <Center>
            <Text
              margin="10px 0px 20px"
              fontWeight="400"
              fontSize="11px"
              color="#7F7F7F"
            >
              Free to try • No credit card required • 1-minute signup
            </Text>
          </Center>
        </Box>
      </Center>
      <Center>
        <Box boxSize="xm">
          <Image
            padding="0 40px"
            height="90px"
            width="100%"
            src="/logo/badges-logos.png"
            alt=""
          />
        </Box>
      </Center>

      <Center>
        <Box mt="50px">
          <Text fontSize="31px" fontWeight="600">
            A time tracker you can trust for life
          </Text>

          <Text
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            <Center>
              We could tell you about the thousands of companies worldwide that
              use our software
              <br />
              for their timekeeping needs… but we thought it best they speak for
              themselves.
            </Center>
          </Text>
        </Box>
      </Center>

      <Flex color="white" marginLeft="60px">
        <Square
          margin="20px"
          w="300px"
          h="200px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “I am the owner of the company, and I use Everhour for timekeeping
            of myself and my subcontractors. All team members use the system -
            from web developers to tech support to project management to
            design.”
            <br />
            <br />— Jennifer H. (Source: TrustRadius)
          </Text>
        </Square>
        <Square
          margin="20px"
          size="270px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour is being used by my department now, but it’s planned to be
            used across the whole company. We were having problems tracking the
            times of every project and Everhour ended up being the best solution
            to the issue. We’re tracking our tasks involved in every project, in
            every level (software development, meetings, project management,
            etc.)”
            <br />
            <br />— Maria Lucia S. (Source: TrustRadius)
          </Text>
        </Square>
        <Square
          margin="20px"
          w="270px"
          h="220px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour helps me manage/plan my weekly activities a lot more
            effectively, since I know how much time I have to work on things
            each day, and can quickly update estimated times to reallocate tasks
            as needed.”
            <br />
            <br />— Dan S. (Source: Capterra)
          </Text>
        </Square>
      </Flex>

      <Flex color="white" marginLeft="60px">
        <Square
          marginTop="-40px"
          marginLeft="38px"
          w="300px"
          h="200px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “I am the owner of the company, and I use Everhour for timekeeping
            of myself and my subcontractors. All team members use the system -
            from web developers to tech support to project management to
            design.”
            <br />
            <br />— Jennifer H. (Source: TrustRadius)
          </Text>
        </Square>
        <Square
          margin="20px"
          size="270px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour is being used by my department now, but it’s planned to be
            used across the whole company. We were having problems tracking the
            times of every project and Everhour ended up being the best solution
            to the issue. We’re tracking our tasks involved in every project, in
            every level (software development, meetings, project management,
            etc.)”
            <br />
            <br />— Maria Lucia S. (Source: TrustRadius)
          </Text>
        </Square>
        <Square
          marginTop="-40px"
          marginLeft="38px"
          w="270px"
          h="220px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour helps me manage/plan my weekly activities a lot more
            effectively, since I know how much time I have to work on things
            each day, and can quickly update estimated times to reallocate tasks
            as needed.”
            <br />
            <br />— Dan S. (Source: Capterra)
          </Text>
        </Square>
      </Flex>

      <Flex color="white" marginLeft="60px">
        <Square
          margin="20px"
          w="300px"
          h="200px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “I am the owner of the company, and I use Everhour for timekeeping
            of myself and my subcontractors. All team members use the system -
            from web developers to tech support to project management to
            design.”
            <br />
            <br />— Jennifer H. (Source: TrustRadius)
          </Text>
        </Square>
        <Square
          margin="20px"
          size="270px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour is being used by my department now, but it’s planned to be
            used across the whole company. We were having problems tracking the
            times of every project and Everhour ended up being the best solution
            to the issue. We’re tracking our tasks involved in every project, in
            every level (software development, meetings, project management,
            etc.)”
            <br />
            <br />— Maria Lucia S. (Source: TrustRadius)
          </Text>
        </Square>
        <Square
          marginTop="-40px"
          marginLeft="18px"
          w="270px"
          h="220px"
          boxShadow="lg"
          borderRadius={"4px"}
          border="1px solid #c1f7d8"
        >
          <Text
            w="90%"
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            “Everhour helps me manage/plan my weekly activities a lot more
            effectively, since I know how much time I have to work on things
            each day, and can quickly update estimated times to reallocate tasks
            as needed.”
            <br />
            <br />— Dan S. (Source: Capterra)
          </Text>
        </Square>
      </Flex>

      <br />
      <Center>
        <Button
          border="1px solid #56BB70"
          color="#56BB70"
          size="sm"
          fontSize="10px"
          fontWeight="400"
          padding="5px 32px"
          borderRadius={"3px"}
          _hover={{ bg: "#56BB70", color: "white", boxShadow: "dark-lg" }}
        >
          Get More
        </Button>
      </Center>

      <Center>
        <Box mt="50px">
          <Text fontSize="24px" fontWeight="500" color="#323233">
            Take control of your time with Everhour
          </Text>
          <Text
            margin="10px 0px 20px"
            fontWeight="400"
            fontSize="12px"
            color="#7F7F7F"
          >
            Beautiful integrations. Intuitive interface. No unexpected fees
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

export default Signup;
