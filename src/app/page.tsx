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

const skills = [
  {
    name: "TypeScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20221110153201",
  },
  {
    name: "JavaScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png",
  },
  {
    neam: "React",
    src: "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124",
  },
  { name: "Material-ui", src: "https://mui.com/static/logo.png" },
  {
    name: "nextjs",
    src: "https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67",
  },
  {
    name: "storybook",
    src: "https://www.svgrepo.com/show/354397/storybook-icon.svg",
  },
  { name: "redux", src: "https://redux.js.org/img/redux-logo-landscape.png" },
  {
    name: "html 5",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "css",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "python",
    src: "https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png",
  },
  {
    name: "R",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png",
  },
  {
    name: "Git",
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
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
        <Image
          src="https://media.licdn.com/dms/image/C4D03AQFwV0Pavmn6oA/profile-displayphoto-shrink_800_800/0/1550937327284?e=1698278400&v=beta&t=EPeRqQmtDKjjQPW9-i-t_b3SOst7CjCCD-ASFN4_ivI"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </Avatar>
      <Typography variant="h4" textAlign="center">
        Welcome to Kevin Morris's personal site.
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

      {/* <Stack
        spacing={2}
        useFlexGap
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        mt="auto"
      >
        {skills.map((s) => (
          <img key={s.name} src={s.src} style={{ height: 45 }} />
        ))}
      </Stack> */}
    </div>
  );
}
