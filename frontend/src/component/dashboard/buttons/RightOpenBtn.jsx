import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png"

const RightOpenBtn = () => {
  const { onOpen } = useDisclosure();
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
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default RightOpenBtn;
