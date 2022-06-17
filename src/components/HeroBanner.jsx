import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import HerobannerImg from "../assets/images/banner.jpeg";

const HeroBanner = () => {
  return (
    <Grid
      container
      mt={{ xs: "70px", lg: "212px" }}
      ml={{ sm: "50px" }}
      position='relative'>
      <Grid item xs={12}>
        <Typography color='#673ab7' fontWeight='600' fontSize='26px'>
          Fitness Club
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography fontWeight='700' fontSize={{ xs: "40px", lg: "44px" }}>
          Sweat, Smile <br /> and Repeat.
        </Typography>
      </Grid>
      <Grid item xs={12} mb={3}>
        <Typography fontSize='22px' lineHeight='35px'>
          Check out the most effective exercise.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          href='#exercise'
          variant='contained'
          color='error'
          sx={{ backgroundColor: "#673ab7", padding: "10px" }}>
          Explore Exercsise
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography
          fontSize='220px'
          fontWeight='600'
          color='#673ab7'
          sx={{ opacity: 0.2, display: { xs: "none", lg: "block" } }}>
          Exercsise
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img src={HerobannerImg} alt='banner' className='hero-banner-img' />
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
