import React, { useEffect, useState } from "react";
import { useExercises } from "@/hooks/useExercises";
import HeroBanner from "../../components/HeroBanner";
import SearchExercises from "../../components/SearchExercises";
import Exercises from "../../components/Exercises";

const Home = () => {
  const [allExercises, setAllExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // Fetch exercises using TanStack Query
  const { data: exercisesData, isLoading } = useExercises(bodyPart);

  useEffect(() => {
    if (exercisesData) {
      console.log('Exercises loaded:', exercisesData.length); // Debug log
      setAllExercises(exercisesData);
      setFilteredExercises(exercisesData);
    }
  }, [exercisesData]);

  useEffect(() => {
    if (bodyPart !== "" && allExercises.length > 0) {
      setFilteredExercises(
        bodyPart === "all"
          ? allExercises
          : allExercises.filter((exercise) => exercise.bodyPart === bodyPart)
      );
    }
  }, [bodyPart, allExercises]);

  return (
    <div>
      <HeroBanner />
      <SearchExercises
        allExercises={allExercises}
        setFilteredExercises={setFilteredExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      {isLoading ? (
        <div className="container py-16 text-center">
          <p className="text-lg text-muted-foreground">Loading exercises...</p>
        </div>
      ) : (
        <Exercises exercises={filteredExercises} bodyPart={bodyPart} />
      )}
    </div>
  );
};

export default Home;
