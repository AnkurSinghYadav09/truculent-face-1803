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
  let array = [
    {
      name: "ankur",
      Time: 2,
      notes: "my name is ankur",
    },
    {
      name: "ankur",
      Time: 2,
      notes: "my name is ankur",
    },
  ];

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  const handleButton = () => {
    axios.post("http://localhost:8080/task", formData);
  };

  const func = () => {
    axios.get("http://localhost:8080/task").then((d) => {
      setData(d.data);
    });
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <Box>
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="task"
        placeholder="task"
        size="md"
        w="500px"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="notes"
        placeholder="Notes"
        size="md"
        w="200px"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="time"
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
            <Flex color="white">
              <Center w="100px" bg="green.500">
                <Text>{el.name}</Text>
              </Center>
              <Square bg="blue.500" size="150px">
                <Text>{el.time}</Text>
              </Square>
              <Box flex="1" bg="tomato">
                <Text>{el.notes}</Text>
              </Box>
            </Flex>
          </div>
        );
      })}
    </Box>
  );
};

export default Task;
