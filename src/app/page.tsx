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
  {
    id: "css",
    src: css,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { id: "git", src: git, href: "https://git-scm.com/" },
  {
    id: "html",
    src: html,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "javascript",
    src: javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { id: "mui", src: mui, href: "https://mui.com/" },
  { id: "nextjs", src: nextjs, href: "https://nextjs.org/" },
  { id: "python", src: python, href: "https://www.python.org/" },
  { id: "r", src: r, href: "https://www.r-project.org/" },
  { id: "react", src: react, href: "https://react.dev/" },
  { id: "redux", src: redux, href: "https://redux.js.org/" },
  { id: "storybook", src: storybook, href: "https://storybook.js.org/" },
  {
    id: "typescript",
    src: typescript,
    href: "https://www.typescriptlang.org/",
  },
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
        I work as a Software Developer and Data Scientist, finding enjoyment in
        the development of data-driven applications.
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
        pt={theme.spacing(3)}
      >
        {skills.map((s) => (
          <Link key={s.id} href={s.href}>
            <Image src={s.src} alt="" style={{ height: 45, width: "auto" }} />
          </Link>
        ))}
      </Stack>
    </div>
  );
}
