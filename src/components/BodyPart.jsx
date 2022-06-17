import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useSearchResultContext } from "../contexts/SearchResultContext";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item }) => {
  const { results, bodyPart, setBodyPart, fetchAllExercise } =
    useSearchResultContext();
  return (
    <Stack
      className='bodyPart-card'
      type='button'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{
        borderTop: bodyPart === item ? "4px solid #673ab7" : "",
        backgroundColor: "#fff",
        borderRadius: "20px",
        cursor: "pointer",
        width: "200px",
        height: "200px",
        gap: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        if (item !== "all") {
          fetchAllExercise(`/bodyPart/${item}`);
        } else {
          fetchAllExercise();
        }
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}>
      <img src={Icon} alt='dumbbell' width='40px' height='40px' />
      <Typography
        fontSize={24}
        fontWeight='700'
        color='#512da8'
        textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
