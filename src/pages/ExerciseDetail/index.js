import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Detail from "../../components/Detail";
import ExerciseVideos from "../../components/ExerciseVideos/index.js";
import SimilarExercises from "../../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const fetchExerciseData = async () => {
    const exerciseURL = "https://exercisedb.p.rapidapi.com";
    const youtubeSearchURL =
      "https://youtube-search-and-download.p.rapidapi.com";

    const exerciseDetailData = await fetchData(
      `${exerciseURL}/exercises/exercise/${id}`,
      exerciseOptions
    );
    setExerciseDetail(exerciseDetailData);
  };

  useEffect(() => {
    fetchExerciseData();
  }, [id]);
  console.log({ exerciseDetail });

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
