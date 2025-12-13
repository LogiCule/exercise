import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBodyParts } from "@/hooks/useExercises";

const SearchExercises = ({
  allExercises,
  setFilteredExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const { data: bodyPartsList = [] } = useBodyParts();

  const handleSearch = () => {
    if (searchValue && allExercises) {
      const searchedExercises = allExercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
          exercise.bodyPart.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
          exercise.target.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
          exercise.equipment.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
      setFilteredExercises(searchedExercises);
      setSearchValue("");
      setBodyPart("");
      window.scrollTo({ top: 900, behavior: "smooth" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleBodyPartClick = (part) => {
    setBodyPart(part);
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  return (
    <section id="exercises" className="py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6" />
          <h2 className="mb-4 text-foreground">
            Find Your Exercise
          </h2>
          <p className="text-foreground/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Search from over 1000 professional exercises tailored to your fitness goals
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass-medium rounded-lg p-1.5 flex items-center gap-2 border-2 border-white/20">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search by name, muscle, or equipment..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 h-12 bg-transparent border-none text-foreground placeholder:text-foreground/30 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-gradient-gold hover:shadow-gold h-12 px-6 rounded-md font-semibold text-background focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Categories - REDUCED SPACING */}
        <div className="mb-0">
          <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-4 font-medium">Filter by Category</h3>
          
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-luxury">
            {bodyPartsList.map((part) => (
              <button
                key={part}
                onClick={() => handleBodyPartClick(part)}
                className={`capitalize whitespace-nowrap transition-colors duration-300 font-medium focus:outline-none focus-visible:ring-0 ${
                  bodyPart === part
                    ? 'text-gold'
                    : 'text-foreground/50 hover:text-foreground/80'
                }`}
              >
                {part}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchExercises;
