"use client"
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  IconButton,
  Image,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  UnorderedList,
} from "@chakra-ui/react"
import { ImageCarousel } from "./carousel"
import { Quotes } from "./quotes";
import { RailwayBlogBody } from "../blog/blog";

enum BodyPageIndices {
  ABOUT_ME = 1,
  PROJECTS = 2,
  BLOG = 3,
}

export const Body = () => {
  const [bodyIdx, setBodyIdx] = useState(BodyPageIndices.ABOUT_ME);
  const [showContactInfo, setShowContactInfo] = useState(false);
  return (
    <Box>
      <Center>
        <Box paddingTop="10px">
          <Button 
            size="xs"
            variant="link"
            colorScheme="red"
            onClick={() => setBodyIdx(BodyPageIndices.ABOUT_ME)}
          >
            Home
          </Button>
          <Button 
            size="xs"
            variant="link"
            colorScheme="orange"
            onClick={() => setBodyIdx(BodyPageIndices.PROJECTS)}
            paddingLeft="12px"
          >
            Projects
          </Button>
          <Button 
            size="xs"
            variant="link"
            colorScheme="yellow"
            onClick={() => window.open("https://docs.google.com/document/d/1p9_AOGbrJWWhp3-EmGflooyrsfgvVG8EaOxXa0mbgG0/edit?usp=sharing")}
            paddingLeft="12px"
          >
            Resumé
          </Button>
          <Button 
            size="xs"
            variant="link"
            colorScheme="green"
            onClick={() => setBodyIdx(BodyPageIndices.BLOG)}
            paddingLeft="12px"
          >
            Blog
          </Button>
          <Button
            size="xs"
            variant="link"
            colorScheme="blue"
            onClick={() => setShowContactInfo(!showContactInfo)}
            paddingLeft="12px"
          >
            Links
          </Button>
        </Box>
      </Center>
      { showContactInfo && <ContactInfoAndLinks /> }
      { getBodyContent(bodyIdx) }
      <Box paddingTop={"50px"} paddingBottom={"5px"}>
        <Center
          fontSize={"small"}
          background="
            linear-gradient(
              to right,
              #ff5722,
              #eeff41,
              #43a047,
              #2196f3,
              #7e57c2,
              #f48fb1,
              #ef5350
            )
          "
          sx={{
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent"
          }}
        >
          <Quotes />
        </Center>
      </Box>
    </Box>
  )
}

const getBodyContent = (bodyIdx: number) => ({
  [BodyPageIndices.ABOUT_ME]: <AboutMeBody />,
  [BodyPageIndices.PROJECTS]: <ProjectsAndHackathonsBody />,
  [BodyPageIndices.BLOG]: <RailwayBlogBody />
})[bodyIdx];

const AboutMeBody = () => {
  const [showInfoSuggestion, setShowInfoSuggestion] = useState(false);
  return (<Box textAlign={"center"} width="75%" margin="auto">
    <Box
      sx={{ 
        paddingTop: "20px",
        width: "400px",
        margin: "auto"
      }}>
      <ImageCarousel />
    </Box>
    <Box
      onMouseEnter={() => setShowInfoSuggestion(true)} 
      onMouseLeave={() => setShowInfoSuggestion(false)}
    >
      <Text fontSize="xl">About Me!</Text>
      <Text fontSize="sm">
        {"I'm a Software Engineer currently living my best life in the 💖 of Queens, NY."}
      </Text>
      <Box sx={{paddingTop: "6px"}}>
        <Text fontSize="sm">
          {"When I'm not programming, some of my other hobbies include:"}
        </Text>
        <Text fontSize="xs">{"• railfanning"}</Text>
        <Text fontSize="xs">{"• playing bass guitar"}</Text>
        <Tooltip 
          label={
            <Box>
              Some of my favorites are (this was hard to pick):
              <UnorderedList>
                <ListItem>Texas Chainsaw Massacre</ListItem>
                <ListItem>Scream (all of them)</ListItem>
                <ListItem>Hell House LLC</ListItem>
                <ListItem>Child&apos;s Play</ListItem>
                <ListItem>Halloween</ListItem>
              </UnorderedList>
            </Box>
          }
        >
          <Text color="orange" fontSize="xs">
            {"• watching horror movies"}
          </Text>
        </Tooltip>
        <Text fontSize="xs">{"• devouring chopped cheeses"}</Text>
        <Tooltip
          label={
            <Box>
              Some of my favorite games are:
              <UnorderedList>
                <ListItem>Super Mario Sunshine</ListItem>
                <ListItem>TLoZ: Majoras Mask</ListItem>
                <ListItem>TLoZ: Ocarina of Time</ListItem>
                <ListItem>Persona 3: FES</ListItem>
                <ListItem>Final Fantasy X</ListItem>
              </UnorderedList>
            </Box>
          }
        >
          <Text 
            color="tomato" 
            fontSize="xs"
          >
            {"• and most importantly, gaming 🔪"}
          </Text>
        </Tooltip>
        {showInfoSuggestion && (
          <Center
            position={"absolute"} 
            paddingTop={"10px"}
            left={"50%"}
            transform={"translate(-50%, 0%)"}
          >
            <Text fontSize={"xx-small"} >
              {"• any text colored above can be hovered over for more info!"}
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  </Box>)
}

const HyperlinkedTableCell = ({
  text,
  url,
  color,
}: {
  text: string,
  url: string,
  color: string,
}) => {
  return (
    <Td style={{ color }}>
      <a href={url}>{ text }</a>
    </Td>
  )
}

const ProjectsAndHackathonsBody = () => {
  const DEFAULT_LINK_COLOR = "#00ffd1";
  return (
    <Box paddingTop={2}>
      <Box
        textAlign={"center"}
        color={DEFAULT_LINK_COLOR}
        fontSize={"x-small"}
        paddingBottom={4}
      >
        * text in this color can be clicked!
      </Box>
      <TableContainer width="80%" sx={{ margin: "auto" }}>
        <Table variant="simple" size="sm">
          <TableCaption>Projects</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Summary</Th>
              <Th>Technologies</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <HyperlinkedTableCell
                color={DEFAULT_LINK_COLOR}
                text="Where is the Train?"
                url="https://github.com/briansukhnandan/where-is-the-train"
              />
              <Td>
                A train tracker for the NYC Subway which parses the MTA's realtime GTFS feeds in a digestable format.
                <br />
                <a href="https://www.whereisthetrain.lol/" style={{ color: "#00ffd1" }}>
                  Click here to see it live!
                </a>
              </Td>
              <Td>React</Td>
            </Tr>
            <Tr>
              <HyperlinkedTableCell
                color={DEFAULT_LINK_COLOR}
                text="Solar System Simulator"
                url="https://github.com/briansukhnandan/solar-system-simulator"
              />
              <Td>
                A Solar System simulator written in React + Three Fiber. Allows for interactivity with Orbit Controls! See the README for more details.
                <br />
                <a href="https://solar-system-sim.vercel.app/" style={{ color: "#00ffd1" }}>
                  Click here to see it live!
                </a>
              </Td>
              <Td>React, Three Fiber</Td>
            </Tr>
            <Tr>
              <HyperlinkedTableCell
                color={DEFAULT_LINK_COLOR}
                text="Chip-8 Emulator"
                url="https://github.com/briansukhnandan/chip8"
              />
              <Td>
                A Chip-8 emulator written in Python.Features ~95% opcode accuracy
                and contains both unit tests as well as a testing ROM you can use to 
                verify functionality.
              </Td>
              <Td>Python</Td>
            </Tr>
            <Tr>
              <HyperlinkedTableCell
                color={DEFAULT_LINK_COLOR}
                text="MCC Linux Mod Manager"
                url="https://github.com/briansukhnandan/MCC-Linux-ModManager"
              />
              <Td>
                A Mod Manager for Halo: The Master Chief Collection written in
                pure Bash. Features support for Halo Reach, CE, 2, and 3.
              </Td>
              <Td>Bash</Td>
            </Tr>
            <Tr>
              <HyperlinkedTableCell
                color={DEFAULT_LINK_COLOR}
                text="FastGE"
                url="https://github.com/briansukhnandan/fastge"
              />
              <Td>
                A React App meant to display prices from the Grand Exchange in 
                OldSchool RuneScape. Pulls prices once a day based on a cron schedule 
                and stores results in Google Firebase for retrieval later.
              </Td>
              <Td>React, Google Firebase, Bash</Td>
            </Tr>
            <Tr>
              <HyperlinkedTableCell
                color={DEFAULT_LINK_COLOR}
                text="delta2A03 (w.i.p)"
                url="https://github.com/briansukhnandan/delta2a03"
              />
              <Td>
                A clone of the 6502 CPU with slightly less functionality 
                written in Rust.
              </Td>
              <Td>Rust</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box paddingTop={"50px"}>
        <TableContainer width="80%" sx={{ margin: "auto" }}>
          <Table variant="simple" size="sm">
            <TableCaption>Hackathons</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Summary</Th>
                <Th>Technologies</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>MakerHack@NYU 2019: Dumbo Renovation</Td>
                <Td>
                  This MakerHack was focused upon renovating the beloved 
                  neighborhood Dumbo in Brooklyn without hindering any small 
                  businesses. We created a map of Dumbo which used LED strips 
                  (controlled by the Arduino) to represent open businesses 
                  to ensure that construction wouldn&apos;t hinder them.
                </Td>
                <Td>Arduino, C++</Td>
              </Tr>
              <Tr>
                <Td>Tech-Festival@QC 2019: Health & Technology</Td>
                <Td>
                  This Tech Festival was focused upon improving Healthcare
                  Technology by creating tools that one may use in the industry.
                  Worked in a team of 2 to design a GUI to display symptoms that
                  may occur at a randomly selected body part. Makes use of Tkinter
                  and the Priaid API.
                </Td>
                <Td>Python</Td>
              </Tr>
              <Tr>
                <Td>CUNY-Hackathon@Baruch 2019: Environmental & Social Impact</Td>
                <Td>
                  This CUNY Hackathon we decided to build a standard HTML page named
                  Plan-It Eco which allows users to create events surrounding
                  environmental cleanup or de-trashing. The events are then posted
                  on the homepage of the website, similar to a messaging board like Reddit.
                </Td>
                <Td>HTML/CSS/JavaScript</Td>
              </Tr>
              <Tr>
                <Td>Global-Game-Jam@Microsoft 2020: Repair & Sustainability</Td>
                <Td>
                  This Global Game Jam was focused around the theme of Repair 
                  and sustainability. Worked in a team of 3 to design a 2D Top-Down RPG 
                  named &quot;Shuttle Trouble&quot; based around the idea of repairing a space ship. 
                  Features a handful of scripts written in C# to enhance gameplay such 
                  as a combat system, bosses/enemies, etc.
                </Td>
                <Td>Unity2D, C#</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

const ContactInfoAndLinks = () => {
  const iconMap = {
    GITHUB: <Image src="/images/icons/github.svg" boxSize="32px" alt="github" />,
    LINKEDIN: <Image src="/images/icons/linkedin.svg" boxSize="32px" alt="linkedin" />,
    YOUTUBE: <Image src="/images/icons/youtube.svg" boxSize="32px" alt="youtube" />
  };

  return (
    <Center paddingTop={"12px"}>
      <Box borderWidth={"2px"} borderRadius={"5px"} padding="8px">
        <Box display={"flex"} gap={"8px"}>
          <IconButton 
            aria-label="Github Icon" 
            icon={iconMap["GITHUB"]} 
            onClick={() => window.open("https://github.com/briansukhnandan")}
          />
          <IconButton 
            aria-label="LinkedIn Icon" 
            icon={iconMap["LINKEDIN"]} 
            onClick={() => window.open("https://linkedin.com/in/briansukhnandan")}
          />
          <IconButton 
            aria-label="YouTube Icon" 
            icon={iconMap["YOUTUBE"]} 
            onClick={() => window.open("https://youtube.com/@deltaregalia")}
          />
        </Box>
        <Box paddingTop={"8px"}>
          <Tooltip 
            label={(
              <Box textAlign={"center"}>
                Email: briansukhnandan@gmail.com
                <br/>
                Click to copy!
              </Box>
            )}
          >
            <Center>
              <Button 
                width={"100%"}
                size={"sm"}
                onClick={() => {
                  navigator.clipboard.writeText("briansukhnandan@gmail.com");
                }}
              >
                Email Me!
              </Button>
            </Center>
          </Tooltip>
        </Box>
      </Box>
    </Center>
  )
}
