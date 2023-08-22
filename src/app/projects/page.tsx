"use client";

import React from "react";
import GitHubRepository from "./GitHubRepository";
import {
  CircularProgress,
  Divider,
  List,
  Stack,
  TextField,
} from "@mui/material";
import GitHubRepositoryObject from "./GitHubRepositoryObject";
import GitHubUserObject from "./GitHubUserObject";
import GitHubUser from "./GitHubUser";

export default function Page() {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<GitHubUserObject>();
  const [repos, setRepos] = React.useState<GitHubRepositoryObject[]>([]);
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const responseRepos = await fetch(
        "https://api.github.com/users/kevindmorris/repos"
      );
      const newRepos = await responseRepos.json();
      newRepos.sort((a: GitHubRepositoryObject, b: GitHubRepositoryObject) => {
        const A = new Date(a.updated_at).valueOf();
        const B = new Date(b.updated_at).valueOf();
        return B - A;
      });
      setRepos(newRepos);

      const responseUser = await fetch(
        "https://api.github.com/users/kevindmorris"
      );
      const newUser = await responseUser.json();
      setUser(newUser);
      setLoading(false);
    })();
  }, []);

  const filteredRepos = React.useMemo(
    () =>
      repos.filter(
        (repos) =>
          repos.name.includes(value.toLowerCase()) ||
          (repos.description &&
            repos.description.toLowerCase().includes(value.toLowerCase())) ||
          repos.topics.some((topic) =>
            topic.toLowerCase().includes(value.toLowerCase())
          )
      ),
    [value, repos]
  );

  if (!user) return null;

  if (loading) return <CircularProgress />;

  return (
    <>
      <GitHubUser {...user} />
      <TextField
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
        variant="standard"
        placeholder="Filter Repositories..."
        fullWidth
        spellCheck={false}
      />
      <List>
        {filteredRepos.map((repo) => (
          <GitHubRepository key={repo.id} {...repo} />
        ))}
      </List>
    </>
  );
}
