import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CreaetWorkspaces = () => {
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
              workspaces 1
            </Heading>
          </Box>
          <Spacer />
          <Box p="6" width="25%">
            <Flex gap="20px">
              <Link to="/base">
                <Button
                  height="30px"
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                  fontWeight="normal"
                >
                  Create a base
                </Button>
              </Link>

              <Button
                height="30px"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                fontWeight="normal"
              >
                Share
              </Button>
              <Button
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

        {/* Here */}
      </Box>
    </div>
  );
};

export default CreaetWorkspaces;
