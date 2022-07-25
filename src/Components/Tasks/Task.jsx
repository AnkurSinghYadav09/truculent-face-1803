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
  console.log(formData);

  const id = +JSON.parse(localStorage.getItem("userid"));
  console.log(typeof id);

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const handleButton = () => {
    axios.post(
      `https://everhourbackend.herokuapp.com/user/${id}/task`,
      formData
    );
  };

  // const func = () => {
    
  // };
  // func()
  useEffect(() => {
    axios
      .get(`https://everhourbackend.herokuapp.com/user/${id}/tasks`)
      .then((d) => {
        console.log(d.data)
        setData(d.data);
      });
  },[]);

  return (
    <Box>
      <Input
        onChange={handleChange}
        name="Title"
        placeholder="task"
        size="md"
        w="500px"
      />
      <Input
        onChange={handleChange}
        name="Notes"
        placeholder="Notes"
        size="md"
        w="200px"
      />
      <Input
        onChange={handleChange}
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
            <Flex color="black" gap="20px">
              <Text>{el.Title}</Text>
              <br />
              <br />
              <Text>{el.Note}</Text>
              <Text>{el.Label}</Text>
            </Flex>
          </div>
        );
      })}
    </Box>
  );
};

export default Task;
