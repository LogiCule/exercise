import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Detail from "../../components/Detail";
import ExerciseVideos from "../../components/ExerciseVideos/index.js";
import SimilarExercises from "../../components/SimilarExercises";
import { useParams } from "react-router-dom";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [similarTarget, setSimilarTarget] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);

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
    const exerciseVideosDaata = await fetchData(
      `${youtubeSearchURL}/search?query=${exerciseDetailData.name}`,
      youtubeOptions
    );
    setExerciseVideos(exerciseVideosDaata);
    const similarTargetData = await fetchData(
      `${exerciseURL}/exercises/target/${exerciseDetailData?.target}`,
      exerciseOptions
    );
    const similarEquipmentData = await fetchData(
      `${exerciseURL}/exercises/equipment/${exerciseDetailData?.equipment}`,
      exerciseOptions
    );
    setSimilarEquipment(similarEquipmentData);
    setSimilarTarget(similarTargetData);
  };
  useEffect(() => {
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos?.contents}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        similarEquipment={similarEquipment}
        similarTarget={similarTarget}
      />
    </Box>
  );
};

export default ExerciseDetail;
