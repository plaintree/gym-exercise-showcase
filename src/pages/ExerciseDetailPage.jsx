import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ExerciseDetail from "../components/ExerciseDetail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercise from "../components/SimilarExercise";
import { useExerciseDetailContext } from "../contexts/ExerciseDetailContext";
import Spinner from "../components/Spinner";

const ExerciseDetailPage = () => {
  const { fetchDetailData, isLoading } = useExerciseDetailContext();
  const { id } = useParams();

  useEffect(() => {
    fetchDetailData(id);
  }, [id]);

  return (
    <Box>
      <ExerciseDetail />
      <ExerciseVideo />
      <SimilarExercise />
    </Box>
  );
};

export default ExerciseDetailPage;
