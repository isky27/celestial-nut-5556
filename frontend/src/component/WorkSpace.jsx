import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import RightOpenBtn from "./buttons/RightOpenBtn";
import { BellIcon, QuestionIcon, Search2Icon } from "@chakra-ui/icons";

const WorkSpace = () => {
  return (
    <>
      {/* Total Div */}
      <Box boxShadow="base" width="100%">
        <Flex>
          <RightOpenBtn />

          {/* ************** */}
          <Spacer />
          <Box w="30rem" h="4rem" p={4}>
            <InputGroup w="95%" margin="auto" bg="white" border="none">
              <InputLeftElement
                color="gray.300"
                fontSize="1rem"
                children={<Search2Icon />}
              />
              <Input placeholder="Search..." borderRadius="5rem" />{" "}
              <InputRightElement
                children="Ctrl K"
                fontSize="1rem"
                color="gray.300"
                marginRight="10px"
              />
            </InputGroup>
          </Box>
          <Spacer />

          {/* *************** */}
          <Box w="13rem" h="4rem">
            <Flex gap="20px" p={2.5}>
              <Box
                borderRadius="50%"
                p={2}
                _hover={{
                  // bg: "gray.200",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                <QuestionIcon width="1.5rem" height="1.5rem" />
              </Box>
              <Box
                borderRadius="50%"
                p={2}
                _hover={{
                  // bg: "gray.200",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                <BellIcon width="1.5rem" height="1.5rem" />
              </Box>
              <Box
                borderRadius="50%"
                p={2}
                _hover={{
                  // bg: "gray.200",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default WorkSpace;
