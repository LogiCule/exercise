import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExerciseCard from "../ExerciseCard";

const Exercises = ({ exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const lastIndex = currentPage * exercisePerPage;
  const firstIndex = lastIndex - exercisePerPage;

  const currExercises = exercises?.slice(firstIndex, lastIndex) || [];
  const totalPages = Math.ceil((exercises?.length || 0) / exercisePerPage);

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [bodyPart]);

  if (!exercises || exercises.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-medium rounded-lg p-12 max-w-md mx-auto border-2 border-white/20">
            <p className="text-lg text-foreground/60">
              No exercises found. Try a different search or category.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Results
            </h2>
            <p className="text-foreground/50">
              {exercises.length} exercises found
            </p>
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currExercises.map((exercise, index) => (
            <div
              key={exercise.id || index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="glass-medium border-white/20 disabled:opacity-30 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="icon"
                    onClick={() => paginate(pageNum)}
                    className={currentPage === pageNum 
                      ? "bg-gradient-gold text-background focus-visible:ring-0 focus-visible:ring-offset-0"
                      : "glass-medium border-white/20 text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                    }
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="glass-medium border-white/20 disabled:opacity-30 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Exercises;
