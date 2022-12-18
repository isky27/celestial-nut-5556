import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Bloc = ({ name }) => {
  return (
    <div>
      <Box
        marginBottom="1rem"
        border="1px solid red"
        width="maxContent"
        marginLeft="1rem"
        borderRadius="2xl"
      >
        <Flex gap="10px">
          <Box
            bg="red.100"
            width="maxContent"
            margin="auto"
            height="8rem"
            borderRadius="1rem"
            p={2}
          >
            <Box
              // border="1px solid red"
              margin="auto"
              height="7rem"
              background="#f82b60"
              borderRadius="1rem"
            >
              <Heading textAlign="center" fontWeight="400" fontSize="5rem">
                Un
              </Heading>
            </Box>
          </Box>
          <Box
            // border="1px solid green"
            width="maxContent"
            margin="auto"
            height="8rem"
          >
            <Flex flexDirection={"column"}>
              <Heading
                fontWeight="medium"
                fontStyle="oblique"
                fontSize="2xl"
                textAlign="center"
                margin="auto"
                p={6}
              >
                You Successfully
              </Heading>
              <Heading
                fontWeight="medium"
                fontStyle="oblique"
                fontSize="2xl"
                textAlign="center"
                margin="auto"
              >
                Created Base {++name}
              </Heading>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Bloc;
