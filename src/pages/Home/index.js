import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import SearchExercises from "../../components/SearchExercises";
import Exercises from "../../components/Exercises";

const Home = () => {
  const [allExercises, setAllExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  useEffect(() => {
    if (bodyPart !== "")
      setFilteredExercises(
        allExercises.filter(
          (exercise) => bodyPart === "all" || exercise.bodyPart === bodyPart
        )
      );
  }, [bodyPart, allExercises]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        allExercises={allExercises}
        setFilteredExercises={setFilteredExercises}
        setAllExercises={setAllExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises exercises={filteredExercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
