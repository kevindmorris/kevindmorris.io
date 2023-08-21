import { GitHub, Language } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  IconButton,
  Link,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import GitHubRepositoryObject from "./GitHubRepositoryObject";

export default function GitHubRepository(repo: GitHubRepositoryObject) {
  const theme = useTheme();

  const date = new Date(repo.updated_at);

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Typography
            variant="caption"
            fontStyle="italic"
            color="text.secondary"
          >
            {date.toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        }
        sx={{ "& .MuiListItemSecondaryAction-root": { top: "25%" } }}
      >
        <ListItemText
          primary={
            <Link href={repo.html_url} target="_blank">
              {repo.name}
            </Link>
          }
          primaryTypographyProps={{ noWrap: true }}
          secondary={repo.description}
          secondaryTypographyProps={{ maxWidth: "80%" }}
        />
      </ListItem>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={theme.spacing(0.5)}
        >
          {repo.topics.map((topic) => (
            <Chip key={topic} size="small" label={topic} />
          ))}
        </Stack>
        <div style={{ marginLeft: "auto", marginTop: theme.spacing(0.5), marginBottom: theme.spacing(0.5) }}>
          <Link href={repo.html_url} target="_blank">
            <IconButton size="small">
              <GitHub />
            </IconButton>
          </Link>
          {repo.homepage && repo.homepage !== "" ? (
            <Link href={repo.homepage} target="_blank">
              <IconButton size="small">
                <Language />
              </IconButton>
            </Link>
          ) : null}
        </div>
      </Box>
      <Divider />
    </>
  );
}
