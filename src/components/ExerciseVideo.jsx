import React from "react";
import { useExerciseDetailContext } from "../contexts/ExerciseDetailContext";
import { Box, Stack, Typography, Link, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ExerciseVideo = () => {
  const { videoData, detailData } = useExerciseDetailContext();
  return (
    <Box mt={{ xs: "20px", lg: "70px" }} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch{" "}
        <span style={{ color: deepPurple[500], textTransform: "capitalize" }}>
          {detailData.name}
        </span>{" "}
        exercise video
      </Typography>
      <Grid container justifyContent='space-between' spacing={2}>
        {videoData?.contents?.slice(0, 3).map((item) => (
          <Grid item key={item.video.videoId} xs={12} s={6} md={4}>
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              className='exercise-video'
              target='_blank'
              rel='noopener noreferrer'
              key={item.video.videoId}>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Typography variant='h6' color='black'>
                {item.video.title}
              </Typography>
            </a>
            <Link
              variant='text'
              my='20px'
              color='secondary'
              fontWeight='bold'
              href={`https://www.youtube.com/c/${item.video.channelName}`}>
              {item.video.channelName}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideo;
