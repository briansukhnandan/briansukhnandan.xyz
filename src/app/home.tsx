"use client";

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { Body } from "./ui/body";
import { SnowEffect, ToggleSnowButton } from "./ui/snow";
import type { BlogPost } from "./blog/types";

export const Home = ({ posts }: { posts: BlogPost[] }) => {
  const [showSnow, setShowSnow] = useState(true);
  const borderColor = useGetOscillatingColor();

  return (
    <main>
      {showSnow ? <SnowEffect /> : null}
      <Box borderColor={borderColor} borderWidth={2.5} minHeight="100vh" height="100%">
        <OpeningHtmlTag />
        <ToggleSnowButton toggleFn={() => setShowSnow(!showSnow)} />
        <Header />
        <Body posts={posts} />
        <ClosingHtmlTag />
      </Box>
    </main>
  );
};

const Header = () => {
  const borderColor = useGetOscillatingColor();

  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "10px",
        color: borderColor,
      }}
    >
      <pre>
        __________       .__                <br />
        \______   \______|__|____    ____   <br />
        |    |  _/\_  __ \  \__  \  /    \  <br />
        |    |   \ |  | \/  |/ __ \|   |  \ <br />
        |________/ |__|  |__(____  /___|  / <br />
        ________________________ \/     \/  <br />
      </pre>
    </Box>
  );
};

const OpeningHtmlTag = () => <span className="rainbow-text">{"<Brian>"}</span>;

const ClosingHtmlTag = () => (
  <Box textAlign="right">
    <span className="rainbow-text-reverse font-mono">{"</Brian>"}</span>
  </Box>
);

const useGetOscillatingColor = () => {
  const [colorIdx, setColorIdx] = useState(0);
  const colors = ["#c53030", "#38a169"];

  useEffect(() => {
    const timeoutId = setTimeout(() => setColorIdx((colorIdx + 1) % colors.length), 750);
    return () => clearTimeout(timeoutId);
  }, [colorIdx]);

  return colors[colorIdx];
};
