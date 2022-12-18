import { Box, Button, filter, Flex, Input, Spacer } from "@chakra-ui/react";
import React from "react";

import CreaetWorkspaces from "./CreaetWorkspaces";

import { useState, useEffect } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");
  const items = JSON.parse(localStorage.getItem("workspaces")) || [];
  const [workspaces, setWorkspace] = useState(items);

  const handleAdd = (e) => {
 
    setWorkspace([...workspaces, [text, 0, Math.random()]]);
    setText("");
  };

  const handleRemove = (id) => {
    setWorkspace((arr) => {
      return arr.filter((workspaces) => workspaces[2] !== id);
    });
  };

  const addBase = (id) => {
    let x = workspaces.map(function (e) {

      if (e[2] === id) {
        // console.log(id)
        e[1]++;
      }
      return e;
    });
    // console.log(x)
    setWorkspace(x);
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("workspaces", JSON.stringify(workspaces));
    //  
  }, [workspaces]);

  return (
    <>
      <Box height="50rem" p={10}>
        <Flex>
          <Input
            width="20%"
            placeholder="Workspace name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Spacer />
          <Button
            onClick={() => handleAdd(text)}
            bg="rgb(45,127,249)"
            color="white"
            _hover={{ bg: "rgb(45,127,249)" }}
          >
            Create a Workspace
          </Button>
        </Flex>
        {workspaces.map((e, index) => {
          return (
            <CreaetWorkspaces
              name={e}
              key={index}
              deleteFunction={() => handleRemove(e[2])}
              addBase={() => addBase(e[2])}
            />
          );
        })}
      </Box>
    </>
  );
};

export default AddTodo;
