import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import SearchExercises from "../../components/SearchExercises";
import Exercises from "../../components/Exercises";

const Home = () => {
  const [allExercises, setAllExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        allExercises={allExercises}
        setAllExercises={setAllExercises}
        setFilteredExercises={setFilteredExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        allExercises={allExercises}
        setAllExercises={setAllExercises}
        setFilteredExercises={setFilteredExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
