"use client";

import React from "react";
import GitHubRepository from "./GitHubRepository";
import { Divider, List, Stack } from "@mui/material";
import GitHubRepositoryObject from "./GitHubRepositoryObject";
import GitHubUserObject from "./GitHubUserObject";
import GitHubUser from "./GitHubUser";

async function fetchRepositories() {
  const response = await fetch(
    "https://api.github.com/users/kevindmorris/repos"
  );
  const data = await response.json();
  console.log(data);
}

export default function Page() {
  const [user, setUser] = React.useState<GitHubUserObject>();
  const [repos, setRepos] = React.useState<GitHubRepositoryObject[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.github.com/users/kevindmorris/repos"
      );
      const newRepos = await response.json();
      newRepos.sort((a: GitHubRepositoryObject, b: GitHubRepositoryObject) => {
        const A = new Date(a.updated_at).valueOf();
        const B = new Date(b.updated_at).valueOf();
        return B - A;
      });
      setRepos(newRepos);
    })();

    (async () => {
      const response = await fetch("https://api.github.com/users/kevindmorris");
      const newUser = await response.json();
      setUser(newUser);
    })();
  }, []);

  return (
    <>
      {user ? <GitHubUser {...user} /> : null}
      <List>
        {repos.map((r) => (
          <GitHubRepository key={r.id} {...r} />
        ))}
      </List>
    </>
  );
}
