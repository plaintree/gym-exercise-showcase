import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box pt='30px' mt='20px' borderTop='1px solid black'>
      <Stack spacing={2} alignItems='center'>
        <Typography variant='h6' mb='33px'>
          Created by Ryan Lui. All copyright reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
