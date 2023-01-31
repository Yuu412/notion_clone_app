import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import Picker from "@emoji-mart/react";

function EmojiPicker(props) {
  const [selectedEmoji, setSelectedEmoji] = useState();
  const [isShowPicker, setIsShowPicker] = useState(false);

  useEffect(() => {
    setSelectedEmoji(props.icon);
  }, [props.icon]);

  const showPicker = () => setIsShowPicker(!isShowPicker);

  const selectEmoji = (e) => {
    const emojiCodes = e.unified.split("-");

    let codesArray = [];
    emojiCodes.forEach((el) => codesArray.push("0x" + el));

    const emoji = String.fromCodePoint(...codesArray);
    setIsShowPicker(false);

    props.onChange(emoji);
  };
  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight="700"
        sx={{ cursor: "pointer" }}
        onClick={showPicker}
      >
        {props.icon}
      </Typography>
      <Box
        sx={{
          display: isShowPicker ? "block" : "none",
          position: "absolute",
          zIndex: 50,
        }}
      >
        <Picker onEmojiSelect={selectEmoji} />
      </Box>
    </Box>
  );
}

export default EmojiPicker;
