import React from "react";
import { useParams } from "react-router-dom";
import { useExerciseDetail, useExerciseVideos, useSimilarExercises } from "@/hooks/useExerciseDetail";
import Detail from "../../components/Detail";
import ExerciseVideos from "../../components/ExerciseVideos";
import SimilarExercises from "../../components/SimilarExercises";
import Loader from "../../components/Loader";

const ExerciseDetail = () => {
  const { id } = useParams();
  
  // Scroll to top when component mounts or id changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);
  
  // Fetch exercise detail using TanStack Query
  const { data: exerciseDetail, isLoading: detailLoading } = useExerciseDetail(id);
  
  // Fetch exercise videos
  const { data: exerciseVideos } = useExerciseVideos(exerciseDetail?.name);
  
  // Fetch similar exercises
  const { targetExercises, equipmentExercises, isLoading: similarLoading } = useSimilarExercises(
    exerciseDetail?.target,
    exerciseDetail?.equipment
  );

  if (detailLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto">
      <Detail exerciseDetail={exerciseDetail || {}} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos?.contents}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        similarEquipment={equipmentExercises}
        similarTarget={targetExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
