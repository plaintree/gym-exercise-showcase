import { useContext, createContext, useState } from "react";
import axios from "axios";

const ExerciseDetailContext = createContext();

const exerciseDBUrl = "https://exercisedb.p.rapidapi.com/exercises";
const ytSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

const exerciseDBfetchOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const youtubefetchOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const ExerciseDetailContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [videoData, setVideoData] = useState({});
  const [targetMuscleExerciseData, setTargetMuscleExerciseData] = useState([]);
  const [equipmentExerciseData, setEquipmentExerciseData] = useState([]);

  const fetchDetailData = async (id) => {
    setIsLoading(true);

    const response = await axios.get(
      `${exerciseDBUrl}/exercise/${id}`,
      exerciseDBfetchOptions
    );
    const exerciseDetailData = response.data;
    setDetailData(exerciseDetailData);
    console.log(exerciseDetailData);

    const fetchYoutubeData = await axios.get(
      `${ytSearchUrl}/search?query=${exerciseDetailData.name}+${exerciseDetailData.equipment}`,
      youtubefetchOptions
    );
    const youtubeData = fetchYoutubeData.data;
    setVideoData(youtubeData);
    console.log(youtubeData);

    const fetchTargetMuscleExerciseList = await axios.get(
      `${exerciseDBUrl}/target/${exerciseDetailData.target}`,
      exerciseDBfetchOptions
    );
    setTargetMuscleExerciseData(fetchTargetMuscleExerciseList.data);

    const fetchEquipmentExerciseList = await axios.get(
      `${exerciseDBUrl}/equipment/${exerciseDetailData.equipment}`,
      exerciseDBfetchOptions
    );
    setEquipmentExerciseData(fetchEquipmentExerciseList.data);

    setIsLoading(false);
  };

  return (
    <ExerciseDetailContext.Provider
      value={{
        isLoading,
        detailData,
        videoData,
        targetMuscleExerciseData,
        equipmentExerciseData,
        fetchDetailData,
      }}>
      {children}
    </ExerciseDetailContext.Provider>
  );
};

export const useExerciseDetailContext = () => useContext(ExerciseDetailContext);
