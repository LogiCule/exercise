import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../../assets/icons/gym.gif";
import BackIcon from "../../assets/icons/back.gif";
import CardioIcon from "../../assets/icons/cardio.gif";
import ChestIcon from "../../assets/icons/chest.gif";
import BicepsIcon from "../../assets/icons/biceps.gif";

const Bodypart = ({ item, bodyPart, setBodyPart }) => {
  const icons = {
    back: BackIcon,
    cardio: CardioIcon,
    chest: ChestIcon,
    "upper arms": BicepsIcon,
  };
  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1500, left: 100 });
      }}
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        backgroundColor: "#fff",
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={icons[item] ? icons[item] : Icon}
        alt={item}
        height={"40px"}
        width={"40px"}
      />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
