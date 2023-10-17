import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export const MuiButton = () => {
  const [format, setFormat] = useState<string[]>([]);
  console.log({ format });

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    setFormat(updatedFormat);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Click")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left clicked")}>Left</Button>
          <Button onClick={() => alert("center clicked")}>Center</Button>
          <Button onClick={() => alert("right clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
