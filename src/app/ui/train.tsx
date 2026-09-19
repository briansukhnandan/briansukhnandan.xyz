"use client";

import { useState, type CSSProperties } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const TRAIN_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLhaM41vCt1ey075rLPElsCHNV-worJkNV";
const SPEEDS = [0.5, 1, 1.5, 2];

export const TrainWidget = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [speedIndex, setSpeedIndex] = useState(1);
  const animationStyle = {
    "--train-widget-duration": `${22 / SPEEDS[speedIndex]}s`,
  } as CSSProperties;

  return (
    <Box
      className={`train-widget${isRunning ? " train-widget-running" : " train-widget-stopped"}`}
      aria-label="Brian's train widget"
    >
      <Box className="train-widget-heading">
        <Text as="span">◉ {isRunning ? "Running" : "Stopped"}</Text>
      </Box>

      <Box className="train-widget-track" aria-hidden="true">
        <span
          className={`train-widget-locomotive-container${isRunning ? "" : " train-widget-paused"}`}
          style={animationStyle}
        >
          <span className="train-widget-locomotive">🚂</span>
        </span>
        <span className="train-widget-rail train-widget-rail-top" />
        <span className="train-widget-rail train-widget-rail-bottom" />
        <span className="train-widget-ties" />
      </Box>

      <Box className="train-widget-actions">
        <Box className="train-widget-motion-controls">
          <Button
            aria-pressed={!isRunning}
            onClick={() => setIsRunning((running) => !running)}
            size="xs"
            variant="outline"
          >
            {isRunning ? "Pause" : "Resume"}
          </Button>
          <Box className="train-widget-speed-control" aria-label="Train speed controls">
            <Button
              aria-label="Decrease train speed"
              isDisabled={speedIndex === 0}
              onClick={() => setSpeedIndex((index) => index - 1)}
              size="xs"
              variant="ghost"
            >
              ←
            </Button>
            <Text as="span">speed</Text>
            <Button
              aria-label="Increase train speed"
              isDisabled={speedIndex === SPEEDS.length - 1}
              onClick={() => setSpeedIndex((index) => index + 1)}
              size="xs"
              variant="ghost"
            >
              →
            </Button>
          </Box>
        </Box>
        <Button
          as="a"
          href={TRAIN_PLAYLIST_URL}
          target="_blank"
          rel="noreferrer"
          size="xs"
          variant="link"
          color="#00ffd1"
        >
          watch my clips ↗
        </Button>
      </Box>
    </Box>
  );
};
