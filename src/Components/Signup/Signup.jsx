import React from "react";
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
} from "@chakra-ui/react";

const Signup = () => {
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
              placeholder="Work email..."
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
    </Box>
  );
};

export default Signup;
