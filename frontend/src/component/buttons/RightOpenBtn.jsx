import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const RightOpenBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Box w="15rem" p={2.5}>
        <Flex p={1} gap="20px">
          <Button
            ref={btnRef}
            as={IconButton}
            icon={<HamburgerIcon />}
            onClick={onOpen}
          >
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerContent>
              <Button
                width="100%"
                borderRadius="0px"
                background="white"
                marginTop="1rem"
                color="gray.600"
                border="1px solid gray"
              >
                All Workspaces
              </Button>
              <Divider orientation="horizontal" marginTop="1rem" />

              <Button
                size="md"
                width="100%"
                borderRadius="0px"
                // border="1px solid green"
                background="white"
                border="1px solid gray"
                marginTop="1rem"
                fontSize="15px"
            fontWeight="medium"
              >
                Templates
              </Button>

              <Button
              size="md"
              width="100%"
              borderRadius="0px"
            //   border="1px solid green"
              background="white"
              border="1px solid gray"
              marginTop="0.5rem"
              >
                All Workspaces
              </Button>

              <Button
                size="md"
                width="100%"
                borderRadius="0px"
                border="1px solid gray"
                background="white"
                // borderColor="gray.500"
                marginTop="0.5rem"
              >
                All Workspaces
              </Button>
            </DrawerContent>
          </Drawer>
          {/* For Logo */}
          <Box w="60%" border="1px solid green">
            {/* <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSyUQoQADaZ-XhM7DsQfMuhx0Uiv4XwgO8qIbvrzI-i-maP6mjq34vt3ettNMessFycg&usqp=CAU"></Image> */}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default RightOpenBtn;
