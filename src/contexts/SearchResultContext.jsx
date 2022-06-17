import { useContext, createContext, useState } from "react";
import axios from "axios";

const SearchResultContext = createContext();

export const baseUrl = "https://exercisedb.p.rapidapi.com/exercises";

export const fetchOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const SearchResultContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [allExercise, setAllExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [isBodyPart, setIsBodyPart] = useState(false);
  const [searchField, setSearchField] = useState("");

  const fetchData = async (url) => {
    setIsLoading(true);

    const response = await axios.get(`${baseUrl}${url}`, fetchOptions);
    const data = response.data;

    console.log(data);

    if (url.toLocaleLowerCase().includes("/bodypartlist")) {
      setResults(["all", ...data]);
      setIsBodyPart(true);
    } else {
      setResults(data);
    }
    setIsLoading(false);
  };

  const fetchAllExercise = async (url = "") => {
    setIsLoading(true);
    const response = await axios.get(`${baseUrl}${url}`, fetchOptions);
    const data = response.data;
    const filteredData = data.filter(
      (exercise) =>
        exercise.bodyPart
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        exercise.name
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        exercise.target
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        exercise.equipment
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase())
    );

    console.log(filteredData);

    setAllExercise(filteredData);
    setIsLoading(false);
  };

  return (
    <SearchResultContext.Provider
      value={{
        fetchData,
        fetchAllExercise,
        isLoading,
        setIsLoading,
        results,
        setResults,
        allExercise,
        setAllExercise,
        bodyPart,
        setBodyPart,
        searchField,
        setSearchField,
        isBodyPart,
        setIsBodyPart,
      }}>
      {children}
    </SearchResultContext.Provider>
  );
};

export const useSearchResultContext = () => useContext(SearchResultContext);
