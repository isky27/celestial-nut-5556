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
        minHeight={"15rem"}
        height="maxContent"
        marginTop="5rem"
        borderRadius="1rem"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      >
        <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
          <Box p="4">
            <Heading fontSize="25px" fontFamily="cursive" fontWeight="500">
              {name[0]}
            </Heading>
          </Box>
          <Box p="6">
            <Flex gap="20px">
              <Button
                onClick={() => addNavigate()}
                height="30px"
                // width={"maxContent"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                fontWeight="normal"
              >
                Create base
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
        <Flex flexWrap={"wrap"}>
          {arr.map((e, index) => (
            <Link key={index} to="/base">
              <Bloc name={index} />
            </Link>
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export default CreaetWorkspaces;
