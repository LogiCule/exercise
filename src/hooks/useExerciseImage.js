import React from "react";
import { useQuery } from "@tanstack/react-query";
import { exerciseOptions } from "@/utils/fetchData";

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

// Hook to fetch exercise image with authentication
export const useExerciseImage = (exerciseId, resolution = 720) => {
  return useQuery({
    queryKey: ['exerciseImage', exerciseId, resolution],
    queryFn: async () => {
      if (!exerciseId) return null;
      
      // Fetch image with API key headers - proper ExerciseDB v2.2 Image Service
      const response = await fetch(
        `${BASE_URL}/image?resolution=${resolution}&exerciseId=${exerciseId}`,
        exerciseOptions
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      
      // Convert to blob
      const blob = await response.blob();
      
      // Create blob URL for the image
      const blobUrl = URL.createObjectURL(blob);
      
      return blobUrl;
    },
    enabled: !!exerciseId,
    staleTime: 1000 * 60 * 60 * 24, // Images don't change - cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep for a week
  });
};

// Cleanup blob URLs when component unmounts
export const useExerciseImageCleanup = (blobUrl) => {
  React.useEffect(() => {
    return () => {
      if (blobUrl && blobUrl.startsWith('blob:')) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [blobUrl]);
};
