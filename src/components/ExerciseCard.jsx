import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { deepPurple, orange } from "@mui/material/colors";
import DefaultImage from "../assets/images/bodyPartCard.jpeg";

const ExerciseCard = ({ exercise }) => {
  return (
    <Card sx={{ width: "360px" }}>
      <CardActionArea href={`/exercise/${exercise.id}`}>
        <CardMedia
          component='img'
          src={exercise.gifUrl || DefaultImage}
          alt={exercise.name}
          loading='lazy'
        />
        <CardContent>
          <Stack spacing={1} direction='row'>
            <Button
              type='button'
              variant='contained'
              disableElevation
              sx={{
                ml: "21",
                color: "white",
                bgcolor: deepPurple[300],
                fontSize: "14",
                borderRadius: "25",
                textTransform: "capitalize",
              }}>
              {exercise.bodyPart}
            </Button>
            <Button
              type='button'
              variant='contained'
              disableElevation
              sx={{
                ml: "21",
                color: "white",
                bgcolor: orange[300],
                fontSize: "14",
                borderRadius: "25",
                textTransform: "capitalize",
              }}>
              {exercise.target}
            </Button>
          </Stack>

          <Typography
            color='black'
            fontWeight='700'
            mt='11px'
            textTransform='capitalize'
            fontSize='18px'>
            {exercise.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExerciseCard;
