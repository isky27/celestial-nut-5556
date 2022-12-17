import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CreaetWorkspaces from "./CreaetWorkspaces";

const AllworkSpaces = () => {
  return (
    <>
      <Box height="50rem" p={10}>
        <Flex>
          <Heading fontWeight="600" fontSize="30px">
            All workspaces
          </Heading>
          <Spacer />
          {/* <Link to="/createws"> */}
          <Button
            bg="rgb(45,127,249)"
            color="white"
            _hover={{ bg: "rgb(45,127,249)" }}
          >
            Create a Workspace
          </Button>
          {/* </Link> */}
        </Flex>
        {/* <Box border="1px solid gray" marginTop="4rem"> */}
        <CreaetWorkspaces />
        {/* <CreaetWorkspaces/> */}
        {/*<CreaetWorkspaces/> */}
        {/* </Box> */}
      </Box>
    </>
  );
};

export default AllworkSpaces;