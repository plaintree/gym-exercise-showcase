import React from "react";
import { Stack, Link } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { deepPurple } from "@mui/material/colors";

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='none'
      px='2'
      sx={{
        gap: { xs: "40px", sm: "122px" },
        marginTop: { xs: "20px", sm: "32px" },
      }}>
      <Link href='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction='row' gap='40px' fontSize={24} alignItems='flex-end'>
        <Link
          href='/'
          underline='none'
          color='#3a1212'
          sx={{ borderBottom: "3px solid #673ab7" }}>
          Home
        </Link>
        <Link href='#exercise' underline='none' color={deepPurple[200]}>
          Exercise
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
