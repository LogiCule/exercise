import { useQuery } from "@tanstack/react-query";
import { exerciseOptions, fetchData, youtubeOptions } from "@/utils/fetchData";

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

// Get single exercise by ID
export const useExerciseDetail = (id) => {
  return useQuery({
    queryKey: ['exercise', id],
    queryFn: async () => {
      const data = await fetchData(
        `${BASE_URL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      return data;
    },
    enabled: !!id,
  });
};

export const useExerciseVideos = (exerciseName) => {
  return useQuery({
    queryKey: ['videos', exerciseName],
    queryFn: async () => {
      const data = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName} exercise`,
        youtubeOptions
      );
      return data;
    },
    enabled: !!exerciseName,
  });
};

export const useSimilarExercises = (target, equipment) => {
  const targetQuery = useQuery({
    queryKey: ['exercises', 'target', target],
    queryFn: async () => {
      const data = await fetchData(
        `${BASE_URL}/exercises/target/${target}`,
        exerciseOptions
      );
      return data;
    },
    enabled: !!target,
  });

  const equipmentQuery = useQuery({
    queryKey: ['exercises', 'equipment', equipment],
    queryFn: async () => {
      const data = await fetchData(
        `${BASE_URL}/exercises/equipment/${equipment}`,
        exerciseOptions
      );
      return data;
    },
    enabled: !!equipment,
  });

  return {
    targetExercises: targetQuery.data || [],
    equipmentExercises: equipmentQuery.data || [],
    isLoading: targetQuery.isLoading || equipmentQuery.isLoading,
  };
};
