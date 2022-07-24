import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Task = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  const handleButton = () => {
    axios.post(
      `http://localhost:8080/user/62c2ce747e928a37b36a725b/task`,
      formData
    );
  };

  const func = () => {
    axios
      .get("http://localhost:8080/user/62c2ce747e928a37b36a725b/tasks")
      .then((d) => {
        setData(d.data);
      });
  };

  useEffect(() => {
    func();
  }, [data]);

  useEffect(() => {
    func();
  }, []);

  return (
    <Box>
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="Title"
        placeholder="task"
        size="md"
        w="500px"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="Notes"
        placeholder="Notes"
        size="md"
        w="200px"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="Label"
        placeholder="time"
        size="md"
        w="100px"
      />
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
        Done
      </Button>
      {data.map((el, ind) => {
        return (
          <div key={ind}>
            <Flex color="black">
              <Center w="100px">
                <Text>{el.Title}</Text>
              </Center>
              <Square size="150px">
                <Text>{el.Note}</Text>
              </Square>
              <Box flex="1">
                <Text>{el.Label}</Text>
              </Box>
            </Flex>
          </div>
        );
      })}
    </Box>
  );
};

export default Task;
