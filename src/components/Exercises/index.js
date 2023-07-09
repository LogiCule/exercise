import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard";

const Exercises = ({
  allExercises,
  setAllExercises,
  setFilteredExercises,
  bodyPart,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const lastIndex = currentPage * exercisePerPage;
  const firstIndex = lastIndex - exercisePerPage;

  const currExercises = allExercises
    .filter((exercise) => bodyPart === "all" || exercise.bodyPart === bodyPart)
    .slice(firstIndex, lastIndex);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [bodyPart]);

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
        {currExercises?.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {allExercises.filter(
          (exercise) => bodyPart === "all" || exercise.bodyPart === bodyPart
        )?.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(
              allExercises.filter(
                (exercise) =>
                  bodyPart === "all" || exercise.bodyPart === bodyPart
              )?.length / exercisePerPage
            )}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
