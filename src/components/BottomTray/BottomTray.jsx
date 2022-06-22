import React from "react";
import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import DialpadIcon from "@mui/icons-material/Dialpad";

const BottomTray = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        border: "1px solid lightgrey",
        bottom: 0,
        background: "#fff",
        height: "60px",
        width: "100%",
      }}
    >
      <CallIcon sx={{ color: "gray" }} />
      <PersonOutlineOutlinedIcon sx={{ color: "gray" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "1px solid lightgrey",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          top: "-20px",
        }}
      >
        <CircleIcon
          sx={{
            position: "absolute",
            height: "80px",
            width: "80px",
            color: "#2AC420",
          }}
        />
        <DialpadIcon
          sx={{
            position: "absolute",
            height: "35px",
            width: "35px",
            color: "#fff",
          }}
        />
      </Box>
      <SettingsOutlinedIcon sx={{ color: "gray" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <CircleOutlinedIcon
          sx={{ position: "absolute", width: "30px", color: "gray" }}
        />
        <CircleIcon
          sx={{ position: "absolute", width: "10px", color: "#2AC420" }}
        />
      </Box>
    </Box>
  );
};

export default BottomTray;
