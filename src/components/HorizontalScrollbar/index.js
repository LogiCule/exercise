import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Bodypart from "../BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  const handleScrollPrev = () => {
    // console.log({ ans: scrollPrev() });
    scrollPrev();
  };

  return (
    <Typography onClick={handleScrollPrev} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  const handleScrollNext = () => {
    // console.log({ ans: scrollNext() });
    // console.log("next");
    scrollNext();
  };

  return (
    <Typography onClick={handleScrollNext} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
      {data?.map((item) => {
        return (
          <Box key={item} itemID={item} m="0 40px" title={item}>
            <Bodypart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
