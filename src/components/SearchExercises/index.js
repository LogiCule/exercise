import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar";

const SearchExercises = ({
  allExercises,
  setAllExercises,
  setFilteredExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [bodyPartsList, setBodyPartsList] = useState([]);

  const getExercise = async () => {
    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );
    setAllExercises(exerciseData);
    setFilteredExercises(exerciseData);
  };

  console.log({ bodyPartsList });

  const getBodyParts = async () => {
    const bodyPartsData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      exerciseOptions
    );
    setBodyPartsList(["all", ...bodyPartsData]);
  };

  const handleSearch = () => {
    if (searchValue) {
      const SearchExercises = allExercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
      setFilteredExercises(SearchExercises);
      setSearchValue("");
    }
  };
  useEffect(() => {
    getExercise();
    getBodyParts();
  }, []);

  return (
    <Stack alignItems={"center"} mt={"37px"} justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "1170px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchValue}
          placeholder="Search Exercise"
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "174px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyPartsList}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
