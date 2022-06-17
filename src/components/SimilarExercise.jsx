import React from "react";
import { useExerciseDetailContext } from "../contexts/ExerciseDetailContext";
import { Box, Typography, Stack, Divider } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Spinner from "./Spinner";

const SimilarExercise = () => {
  const { targetMuscleExerciseData, equipmentExerciseData } =
    useExerciseDetailContext();

  return (
    <Stack mt={{ xs: 0, lg: "70px" }} p='20px'>
      <Typography variant='h4' mb='50px'>
        Exercise targets the same muscle group
      </Typography>
      <Stack direction='row' spacing={2} mb='20px'>
        {targetMuscleExerciseData.length ? (
          <HorizontalScrollbar data={targetMuscleExerciseData} />
        ) : (
          <Spinner />
        )}
      </Stack>
      <Divider />
      <Typography variant='h4' mb='50px'>
        Exercise using the same equipment
      </Typography>
      <Stack direction='row' spacing={2}>
        {equipmentExerciseData.length ? (
          <HorizontalScrollbar data={equipmentExerciseData} />
        ) : (
          <Spinner />
        )}
      </Stack>
    </Stack>
  );
};

export default SimilarExercise;
