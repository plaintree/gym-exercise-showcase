import { useEffect } from "react";
import { Typography, Stack, IconButton } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquiptmentImage from "../assets/icons/equipment.png";
import { useExerciseDetailContext } from "../contexts/ExerciseDetailContext";

const ExerciseDetail = () => {
  const { detailData } = useExerciseDetailContext();
  const { name, id, bodyPart, target, equipment, gifUrl } = detailData;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquiptmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      flexDirection={{ lg: "row" }}
      p='20px'
      alignItems='center'>
      <img src={gifUrl} className='detail-image' alt={name} />
      <Stack gap={{ xs: "20px", lg: "35px" }}>
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='h6'>
          Exercise keep you strong. {name} is one of the best exercise to
          improve your {target}. Also make you more energetic.
        </Typography>
        {extraDetail.map((item) => (
          <Stack gap='24px' key={item.name} direction='row' alignItems='center'>
            <IconButton>
              <img src={item.icon} />
            </IconButton>
            <Typography variant='h6' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ExerciseDetail;
