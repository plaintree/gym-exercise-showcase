import { useEffect, useState } from "react";
import { useSearchResultContext } from "../contexts/SearchResultContext";
import { Stack, Box, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercise = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { allExercise } = useSearchResultContext();

  const exercisePerPage = 12;
  const LastExerciseIndex = currentPage * exercisePerPage;
  const FirstExerciseIndex = LastExerciseIndex - exercisePerPage;
  const currentExercise = allExercise.slice(
    FirstExerciseIndex,
    LastExerciseIndex
  );

  const handlePagination = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <Box id='exercises' mt={{ lg: "110px", xs: "60px" }} p='20px'>
      <Typography variant='h3' mb='45px'>
        Showing Results
      </Typography>

      <Stack
        direction='row'
        gap={{ lg: "50px", xs: "80px" }}
        flexWrap='wrap'
        justifyContent='center'>
        {currentExercise?.map((exercise, index) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {allExercise.length > exercisePerPage && (
          <Pagination
            color='secondary'
            size='lg'
            variant='outlined'
            shape='rounded'
            count={Math.ceil(allExercise.length / exercisePerPage)}
            page={currentPage}
            onChange={handlePagination}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;
