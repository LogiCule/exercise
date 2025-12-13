import React from "react";
import ExerciseCard from "../ExerciseCard";

const SimilarExercises = ({ similarEquipment, similarTarget }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Target Muscle Section */}
      <div className="mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Similar Target Muscles
          </h2>
          <p className="text-foreground/60">Exercises working the same muscle groups</p>
        </div>
        {similarTarget?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarTarget.slice(0, 3).map((exercise, index) => (
              <div
                key={exercise.id || index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ExerciseCard exercise={exercise} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-medium rounded-lg p-8 text-center">
            <p className="text-foreground/60">Loading similar exercises...</p>
          </div>
        )}
      </div>

      {/* Equipment Section */}
      <div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Same Equipment
          </h2>
          <p className="text-foreground/60">Exercises using the same equipment</p>
        </div>
        {similarEquipment?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarEquipment.slice(0, 3).map((exercise, index) => (
              <div
                key={exercise.id || index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ExerciseCard exercise={exercise} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-medium rounded-lg p-8 text-center">
            <p className="text-foreground/60">Loading similar equipment...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
