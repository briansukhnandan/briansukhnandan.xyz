"use client"
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Body } from "./ui/body";
import { SnowEffect, ToggleSnowButton } from "./ui/snow";

export default function Home() {
  const [showSnow, setShowSnow] = useState(true);
  const borderColor = useGetOscillatingColor();
  return (
    <main>
      {/** Keep SnowEffect as the top-most component */}
      { showSnow ? <SnowEffect /> : null }
      <Box
        borderColor={borderColor}
        borderWidth={2.5}
        minHeight={"100vh"}
        height={"100%"}
      >
        <OpeningHtmlTag />
        <ToggleSnowButton
          toggleFn={() => setShowSnow(!showSnow)}
        />
        <Header />
        <Body />
        <ClosingHtmlTag/>
      </Box>
    </main>
  );
}

const Header = () => {
  const borderColor = useGetOscillatingColor();
  return (
    <Box sx={{
      textAlign: "center",
      paddingTop: "10px",
      color: borderColor
    }}>
      <pre>
        __________       .__                <br/>
        \______   \______|__|____    ____   <br/>
        |    |  _/\_  __ \  \__  \  /    \  <br/>
        |    |   \ |  | \/  |/ __ \|   |  \ <br/>
        |________/ |__|  |__(____  /___|  / <br/>
        ________________________ \/     \/  <br/>
      </pre>
    </Box>
  )
};

const OpeningHtmlTag = () => (
  <Box style={{ textAlign: "left" }}>
    {"<Brian>"}
  </Box>
);

const ClosingHtmlTag = () => (
  <Box 
    style={{ 
      textAlign: "right",
      bottom: "0px"
    }}
  >
    {"</Brian>"}
  </Box>
);

const useGetOscillatingColor = () => {
  const [colorIdx, setColorIdx] = useState(0);
  const colors = [
    "#c53030", // Red 500
    "#38a169", // Green 500
  ];

  useEffect(() => {
    setTimeout(() => 
      setColorIdx((colorIdx + 1) % colors.length)
    , 750);
  }, [colorIdx]);

  return colors[colorIdx];
}
