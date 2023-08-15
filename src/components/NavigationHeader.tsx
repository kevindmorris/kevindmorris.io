"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../kevin-logo.png";
import { useTheme } from "@mui/material";

export default function NavigationHeader() {
  const theme = useTheme();

  return (
    <nav
      style={{
        padding: theme.spacing(2),
        background: theme.palette.background.paper,
        position: "sticky",
        top: 0,
        borderBottom: "1px solid",
        borderColor: theme.palette.divider,
        backdropFilter: "blur(8px)",
      }}
    >
      <Link href="/">
        <Image src={logo} height={40} alt="Kevin" />
      </Link>
    </nav>
  );
}
