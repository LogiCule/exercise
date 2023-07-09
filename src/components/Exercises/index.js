import { Box, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard";

const Exercises = ({
  allExercises,
  setAllExercises,
  setFilteredExercises,
  bodyPart,
}) => {
  console.log({ allExercises, bodyPart });
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} p="20px" mt="50px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        {allExercises
          .filter(
            (exercise) => bodyPart === "all" || exercise.bodyPart === bodyPart
          )
          ?.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
