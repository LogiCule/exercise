import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { exerciseOptions, fetchData } from "@/utils/fetchData";

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

export const useExercises = (bodyPart) => {
  return useQuery({
    queryKey: ['exercises', bodyPart],
    queryFn: async () => {
      if (!bodyPart || bodyPart === 'all') {
        // Get all exercises - no limit or offset to get everything
        const data = await fetchData(
          `${BASE_URL}/exercises`,
          exerciseOptions
        );
        return data;
      }
      // Get exercises by body part - no limit to get all
      const data = await fetchData(
        `${BASE_URL}/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      );
      return data;
    },
    enabled: !!bodyPart,
    staleTime: 1000 * 60 * 60, // Consider data fresh for 1 hour
    gcTime: 1000 * 60 * 60 * 24, // Keep in cache for 24 hours
  });
};

export const useBodyParts = () => {
  return useQuery({
    queryKey: ['bodyParts'],
    queryFn: async () => {
      const data = await fetchData(
        `${BASE_URL}/exercises/bodyPartList`,
        exerciseOptions
      );
      return ['all', ...data];
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours - body parts list rarely changes
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep for a week
  });
};

export const useExercisesByName = (searchTerm) => {
  return useQuery({
    queryKey: ['exercises', 'search', searchTerm],
    queryFn: async () => {
      if (!searchTerm) return [];
      
      // Get exercises by name
      const data = await fetchData(
        `${BASE_URL}/exercises/name/${searchTerm}`,
        exerciseOptions
      );

      return data;
    },
    enabled: !!searchTerm,
    staleTime: 1000 * 60 * 30, // 30 minutes for search results
  });
};
