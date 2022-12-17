import { Box } from "@chakra-ui/react";
import React from "react";

const Bloc = ({ name }) => {
  return (
    <div>
      <Box>Base {++name}</Box>
    </div>
  );
};

export default Bloc;
