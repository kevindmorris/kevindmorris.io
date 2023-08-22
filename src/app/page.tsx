"use client";

import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import kevin from "../assets/kevin-morris-linkedin.jpg";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mui from "../assets/mui.png";
import nextjs from "../assets/nextjs.png";
import python from "../assets/python.png";
import r from "../assets/r.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import storybook from "../assets/storybook.png";
import typescript from "../assets/typescript.png";

const skills = [
  { id: "css", src: css },
  { id: "git", src: git },
  { id: "html", src: html },
  { id: "javascript", src: javascript },
  { id: "mui", src: mui },
  { id: "nextjs", src: nextjs },
  { id: "python", src: python },
  { id: "r", src: r },
  { id: "react", src: react },
  { id: "git", src: git },
  { id: "redux", src: redux },
  { id: "storybook", src: storybook },
  { id: "typescript", src: typescript },
];

export default function Page() {
  const theme = useTheme();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }}
    >
      <Avatar sx={{ width: 150, height: 150, opacity: 0.8 }}>
        <Image src={kevin} alt="" style={{ width: "100%", height: "100%" }} />
      </Avatar>
      <Typography variant="h4" textAlign="center">
        Welcome to the personal site of Kevin Morris.
      </Typography>
      <Typography variant="h6" textAlign="center">
        I work as a Software Developer and Data Scientist who enjoys building
        data driven applications.
      </Typography>

      <List sx={{ width: "max-content", maxWidth: "100vw" }}>
        <Link
          href="/professional"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton>
            <ListItemText
              primary="Professional"
              secondary="Find out more about my professional and educational experiences..."
            />
          </ListItemButton>
        </Link>
        <Link
          href="/projects"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton>
            <ListItemText
              primary="Projects"
              secondary="View some of my personal projects..."
            />
          </ListItemButton>
        </Link>
      </List>

      <Stack
        spacing={2}
        useFlexGap
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        mt="auto"
      >
        {skills.map((s) => (
          <Image key={s.id} src={s.src} alt="" style={{ height: 45, width: "auto" }} />
        ))}
      </Stack>
    </div>
  );
}
