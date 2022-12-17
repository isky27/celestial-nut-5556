import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bloc from "./Bloc";

const CreaetWorkspaces = ({ name, deleteFunction, addBase }) => {
  const [arr, setArr] = useState([]);
  // const navigate = useNavigate();
  const addNavigate = () => {
    addBase();
    // navigate("/base");
  };

  useEffect(() => {
    setArr(new Array(name[1]).fill(1));
  }, [name]);

  return (
    <div>
      {/* Append all Base inside this box */}
      <Box
        height="22rem"
        marginTop="5rem"
        borderRadius="1rem"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      >
        <Flex>
          <Box p="4" width="15%">
            <Heading fontSize="25px" fontFamily="cursive" fontWeight="500">
              {name[0]}
            </Heading>
          </Box>
          <Spacer />
          <Box p="6" width="25%">
            <Flex gap="20px">
              <Button
                onClick={() => addNavigate()}
                height="30px"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                fontWeight="normal"
              >
                Create a base
              </Button>

              <Button
                height="30px"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                fontWeight="normal"
              >
                Share
              </Button>
              <Button
                onClick={() => deleteFunction()}
                //   width="20%"
                height="30px"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                fontWeight="normal"
              >
                Delete
              </Button>
            </Flex>
          </Box>
        </Flex>
        {arr.map((e, index) => (
          <Link to="/base">
            <Bloc key={index} name={index} />
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default CreaetWorkspaces;
