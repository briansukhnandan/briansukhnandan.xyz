"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Box, Center } from "@chakra-ui/react";

import { AboutMeBody, SiteNavigation } from "./ui/body";
import { Quotes } from "./ui/quotes";

export const Home = ({ carouselImages }: { carouselImages: string[] }) => (
  <SiteShell>
    <AboutMeBody carouselImages={carouselImages} />
  </SiteShell>
);

export const SiteShell = ({
  children,
  showNavigation = true,
}: {
  children: ReactNode;
  showNavigation?: boolean;
}) => {
  const borderColor = useGetOscillatingColor();

  return (
    <main>
      <Box borderColor={borderColor} borderWidth={2.5} minHeight="100vh" height="100%">
        <OpeningHtmlTag />
        <Header color={borderColor} />
        {showNavigation ? <SiteNavigation /> : null}
        {children}
        <Footer />
        <ClosingHtmlTag />
      </Box>
    </main>
  );
};

const Footer = () => (
  <Box paddingTop={8} paddingBottom="5px">
    <Center
      textAlign="center"
      fontSize="small"
      background="linear-gradient(to right, #ff5722, #eeff41, #43a047, #2196f3, #7e57c2, #f48fb1, #ef5350)"
      sx={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <Quotes />
    </Center>
  </Box>
);

const Header = ({ color }: { color: string }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "10px",
        color,
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
  }, [colorIdx, colors.length]);

  return colors[colorIdx];
};
