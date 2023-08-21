import React from "react";
import GitHubUserObject from "./GitHubUserObject";
import {
  Avatar,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Book, People } from "@mui/icons-material";

export default function GitHubUser(user: GitHubUserObject) {
  const theme = useTheme();

  return (
    <>
      <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
        <Link
          href="https://github.com/kevindmorris"
          target="_blank"
          underline="none"
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Paper
            variant="outlined"
            sx={{
              margin: theme.spacing(2),
              padding: theme.spacing(2),
              display: "flex",
              gap: theme.spacing(2),
            }}
          >
            <Avatar sx={{ width: 150, height: 150, opacity: 0.8 }}>
              <img
                src={user.avatar_url}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Avatar>
            <List disablePadding dense>
              <ListItem disableGutters disablePadding>
                <ListItemText
                  primary={`${user.name} | ${user.login}`}
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemText
                  primary={user.bio}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "text.secondary",
                  }}
                />
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemIcon sx={{ minWidth: 25 }}>
                  <Book fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={user.public_repos} />
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemIcon sx={{ minWidth: 25 }}>
                  <People fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={user.followers} />
              </ListItem>
            </List>
          </Paper>
        </Link>
      </div>
      <Divider sx={{ display: { xs: "none", sm: "none", md: "block" } }} />
      <Link
        href="https://github.com/kevindmorris"
        target="_blank"
        underline="none"
        sx={{ display: { md: "none" } }}
      >
        <Paper
          variant="outlined"
          sx={{
            margin: theme.spacing(2),
            display: "flex",
            gap: theme.spacing(2),
          }}
        >
          <List sx={{ width: "100%" }}>
            <ListItem>
              <ListItemAvatar sx={{ width: 75, height: 75, mr: 1 }}>
                <Avatar
                  src={user.avatar_url}
                  alt=""
                  sx={{ width: "100%", height: "100%" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.name} | ${user.login}`}
                primaryTypographyProps={{ noWrap: true }}
                secondary={user.bio}
                secondaryTypographyProps={{
                  color: "text.secondary",
                //   noWrap: true,
                }}
              />
            </ListItem>
          </List>
        </Paper>
      </Link>
    </>
  );
}
