import { useEffect, useState } from "react";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import HorizontalScrollbar from "./HorizontalScrollbar";

import { useSearchResultContext } from "../contexts/SearchResultContext";

const SearchExercise = () => {
  const {
    isLoading,
    results,
    fetchData,
    fetchAllExercise,
    allExercise,
    searchField,
    setSearchField,
  } = useSearchResultContext();

  useEffect(() => {
    fetchData(`/bodyPartList`);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchField) return;
    fetchAllExercise();

    setSearchField("");
  };
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      mt='37px'
      p='20px'>
      <Grid item xs={12} mb='20px'>
        <Typography
          fontWeight={700}
          fontSize={{ xs: "30px", lg: "44px" }}
          textAlign='center'>
          Amazing Exercise You Should Try
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          mb='72px'>
          <TextField
            type='text'
            margin='none'
            label='Search Exercise'
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "5px" },
              width: { xs: "350px", md: "700px", lg: "1000px" },
              backgroundColor: "white",
            }}
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <Button
            className='search-btn'
            sx={{
              bgcolor: deepPurple[500],
              color: "white",
              width: { xs: "80px", lg: "175px" },
              fontSize: { xs: "14px", lg: "20px" },
              height: "56px",
            }}
            onClick={handleSearch}>
            Search
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <HorizontalScrollbar data={results} />
      </Grid>
    </Grid>
  );
};

export default SearchExercise;
