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
          
          <Box w="60%">
            {/* Add Logo here */}
            <img src="https://i.postimg.cc/KvnhWC67/Whats-App-Image-2022-12-16-at-21-08-41.jpg" alt="" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default RightOpenBtn;
