import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(false);
  const createMemo = () => {};

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingButton
        variant="outlined"
        onClick={() => createMemo}
        loading={loading}
      >
        最初のメモを作成
      </LoadingButton>
    </Box>
  );
}

export default Home;
