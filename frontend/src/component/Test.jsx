import {
    Box,
  chakra,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
const Test = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      {/* <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={onOpen}
          ref={btnRef}
        />
        <MenuList
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          {/* <MenuIte icon={<AddIcon />} command="⌘T">
            New Tab
          </MenuIte>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem> 
        </MenuList>
      </Menu> */}
      <Box height="100rem" border="2px solid green" width="59%">

      </Box>
    </div>
  );
};

export default Test;
