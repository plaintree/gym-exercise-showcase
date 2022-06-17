import React from "react";
import { SpinnerCircular } from "spinners-react";
import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Spinner = () => {
  return (
    <Box justifyContent='center' alignItems='center' width='100%'>
      <SpinnerCircular color={deepPurple[400]} />
    </Box>
  );
};

export default Spinner;
