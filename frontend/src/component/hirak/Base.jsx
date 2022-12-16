import { BellIcon, QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsUiChecksGrid } from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import { MdFilterList } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { BiSort } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { GrShare } from "react-icons/gr";
import Sheet from "./Sheet";
const Base = () => {
  return (
    <div>
      <Box boxShadow="base" width="100%" bg="#e52e4d">
        <Flex>
          <Box w="35%">
            <Flex gap="20px" p={4}>
              <Box width="35%" margin="auto">
                <Heading fontSize="2xl" color="white">
                  {" "}
                  Base Created
                </Heading>
              </Box>

              <Box width="15%" margin="auto">
                <Button
                  width="100%"
                  color="whiteAlpha.800"
                  bg="transparent"
                  _hover={{ bg: "#c42741" }}
                  fontSize="small"
                  borderRadius="full"
                >
                  Data
                </Button>
              </Box>
              <Box width="20%" margin="auto">
                {" "}
                <Button
                  width="100%"
                  color="whiteAlpha.800"
                  bg="transparent"
                  _hover={{ bg: "#c42741" }}
                  fontSize="small"
                  borderRadius="full"
                >
                  Automations
                </Button>
              </Box>
              <Box width="20%" margin="auto">
                {" "}
                <Button
                  width="100%"
                  color="whiteAlpha.800"
                  bg="transparent"
                  _hover={{ bg: "#c42741" }}
                  fontSize="small"
                  borderRadius="full"
                >
                  Interfaces
                </Button>
              </Box>
            </Flex>
          </Box>

          <Spacer />

          {/* *************** */}
          <Box w="17rem" h="4rem" color="#e52e4d">
            <Flex gap="25px" p={3}>
              <Box
                bg="white"
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
              <Box>
                <Button borderRadius="full" gap={2}>
                  <FiShare2 />
                  Share
                </Button>
              </Box>
              <Box
                bg="white"
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
              ></Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Tabs size="md" variant="enclosed" color="white">
        <TabList bg="#c42741">
          <Tab>Task 1</Tab>
          <Tab>Task 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box
              border="1px solid black"
              height="4rem"
              padding={3}
              width="102%"
              marginTop="-15px"
              marginLeft="-14px"
            >
              <Flex gap={5}>
                {/* <Box > */}
                <Button color="black" gap={1} background="transparent">
                  <AiOutlineMenu />
                  Views
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <BsUiChecksGrid />
                  Grid view
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <BiHide />
                  Hide Fields
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <MdFilterList />
                  Filter
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <GrGroup />
                  Group
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <BiSort />
                  Sort
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <AiOutlineBgColors />
                  Color
                </Button>
                <Button
                  background="transparent"
                  color="black"
                  gap={1}
                  fontSize="small"
                >
                  <GrShare />
                  Share view
                </Button>
                {/* </Box> */}
              </Flex>
            </Box>
            <Sheet/>
            {/* <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                    <Td>
                      <Input />
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Base;
