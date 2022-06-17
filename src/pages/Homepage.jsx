import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Exercise from "../components/Exercise";
import SearchExercise from "../components/SearchExercise";
import HeroBanner from "../components/HeroBanner";

const Homepage = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />
    </Box>
  );
};

export default Homepage;
