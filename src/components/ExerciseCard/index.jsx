import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useExerciseImage } from "@/hooks/useExerciseImage";

const ExerciseCard = ({ exercise }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fetch the image with proper authentication using the Image Service endpoint
  const { data: imageUrl, isLoading: imageLoading } = useExerciseImage(exercise.id);
  
  const handleImageError = () => {
    setImageError(true);
  };

  const showPlaceholder = imageError || (!imageUrl && !imageLoading);

  return (
    <Link to={`/exercise/${exercise.id}`} className="block group">
      <Card className="bg-card border-2 border-white/20 overflow-hidden h-[420px] flex flex-col transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 hover:border-gold/40">
        {/* Image container - Fetched from Image Service API */}
        <div className="relative w-full h-[280px] overflow-hidden bg-secondary">
          {imageLoading ? (
            // Loading state
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="text-center p-6">
                <svg className="w-12 h-12 mx-auto mb-2 text-foreground/20 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p className="text-foreground/30 text-xs">Loading...</p>
              </div>
            </div>
          ) : !showPlaceholder && imageUrl ? (
            <img
              src={imageUrl}
              alt={exercise.name}
              loading="lazy"
              onError={handleImageError}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            // Placeholder for missing/failed images
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="text-center p-6">
                <svg className="w-16 h-16 mx-auto mb-3 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-foreground/30 text-sm font-medium line-clamp-2">{exercise.name}</p>
              </div>
            </div>
          )}
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg text-foreground capitalize mb-2 line-clamp-2 group-hover:text-gold transition-colors">
              {exercise.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <span className="capitalize">{exercise.bodyPart}</span>
              <span>·</span>
              <span className="capitalize">{exercise.target}</span>
            </div>
          </div>
          
          {/* Equipment tag */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <span className="text-xs text-foreground/40 uppercase tracking-wider">{exercise.equipment}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ExerciseCard;
