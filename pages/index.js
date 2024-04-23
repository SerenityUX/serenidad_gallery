import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider, Box, Flex, Image, Text } from 'theme-ui';

const theme = {
  fonts: {
    body: "'Work Sans', sans-serif",
  },
  styles: {
    root: {
      fontFamily: 'body',
      margin: 0,
    },
  },
};

export default function HomePage() {
  const projects = [
    {
      slug: "https://sidequestvr.com/app/27172/life-of-chai",
      title: "Life Of Chai",
      circleImage: "/images/LifeOfChaiCircle.svg",
      backgroundImage: "/images/LifeOfChaiBG.svg"
    }, 
    {
      slug: "https://sidequestvr.com/app/31539/capybara-beach",
      title: "Capybara",
      circleImage: "/images/CapybaraCircle.svg",
      backgroundImage: "/images/CapybaraBG.svg"
    },
    {
      slug: "https://sidequestvr.com/app/32606/dragon-fly",
      title: "Dragon",
      circleImage: "/images/DragonCircle.svg",
      backgroundImage: "/images/DragonBG.svg"
    },
    {
      slug: "https://youtu.be/Mcirws6Bh4A?feature=shared",
      title: "Bike",
      circleImage: "/images/BikeCircle.svg",
      backgroundImage: "/images/BikeBG.svg"
    },
    {
      slug: "/",
      title: "???",
      circleImage: "/images/MysteryCircle.svg",
      backgroundImage: "/images/MysteryBG.svg"
    }
  ];

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundImage: `url("/images/coolBackground.png")`, minHeight: "100vh", objectFit: "cover", backgroundSize: "cover" }}>
          <Flex sx={{ flexDirection: ["column", "column", "column", "row"], alignItems: ["start", "start", "start", "center"], gap: 32, paddingTop: 72, marginBottom: 48, mx: [4, 4, 4, 196]}}>
            <p>
            <Text sx={{ fontSize: 72, color: "#000",  display: "flex",  width: "100%", letterSpacing: -8, fontWeight: 600, lineHeight: 1 }}>
              Serenidad
            </Text>
            </p>
            <Image src="/images/smileVector.svg" sx={{ height: "64px",  display: ["none", "none", "none", "flex"], width: "33%" }} />
            <p>
            <Text sx={{ fontSize: 22, color: "#000", display: "flex", width: "100%" }}>
              Dieter & Thomas building obscure virtual reality media that bring smiles, laughter, and serenity.
            </Text>
            </p>
          </Flex>
          <Flex sx={{ flexWrap: "wrap", pb: [32, 32, 32, 0], justifyContent: "center", mx: [4, 4, 4, 196], gap: 64 }}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ position: "relative", aspectRatio: 4 / 3, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", width: ["100%", "100%", "100%", "calc(33.3333333% - 45px)"], borderRadius: 16 }}>
                <Link href={project.slug}>
                  <Image src={project.backgroundImage} sx={{ display: "flex", width: "100%", top: 0, left: 0, position: "absolute" }} />

                  <Image src={project.circleImage} sx={{ display: "flex", height: "calc(100% - 64px)", width: "100%", left: 0, objectFit: "contain", top: 32, position: "absolute" }} />

                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      </ThemeProvider>
    </>
  );
}
