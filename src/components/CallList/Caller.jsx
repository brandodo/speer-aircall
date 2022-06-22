import React from "react";
import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Caller = ({ data }) => {
  const {
    id,
    created_at,
    direction,
    duration,
    from,
    is_archived,
    to,
    via,
    call_type,
  } = data;

  const callType =
    direction === "inbound" && call_type !== "answered" ? (
      <ArrowRightAltIcon
        sx={{
          color: "red",
          width: "20px",
          position: "absolute",
          left: "5px",
          top: "-8px",
          transform: "rotate(90deg)",
        }}
      />
    ) : direction === "outbound" && call_type !== "answered" ? (
      <ArrowRightAltIcon
        sx={{
          color: "red",
          width: "20px",
          position: "absolute",
          left: "5px",
          top: "-8px",
          transform: "rotate(-90deg)",
        }}
      />
    ) : (
      ""
    );

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid lightgrey",
        width: "80%",
        p: "15px",
        borderRadius: "10px",
        gap: "10px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CallIcon sx={{ color: "lightgrey" }} />
        {callType}
      </Box>
      <Box sx={{ width: "90%" }}>
        <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
          {from}
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "14px" }}>
          tried to call on {via}
        </Typography>
      </Box>
      <Box>
        <MoreVertIcon sx={{ color: "lightgrey" }} />
        <Typography></Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default Caller;
