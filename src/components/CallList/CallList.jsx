import { Box } from "@mui/system";
import React from "react";
import Caller from "./Caller.jsx";

const CallList = ({ data }) => {
  const callers = data.map((call) => <Caller key={data.id} data={call} />);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
        height: "calc(100% - 142px)",
        marginTop: "15px",
        overflow: "scroll",
      }}
    >
      {callers}
    </Box>
  );
};

export default CallList;
