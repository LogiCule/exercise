import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../../assets/icons/gym.png";

const Bodypart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
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
      <img src={Icon} alt={item} height={"40px"} width={"40px"} />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
