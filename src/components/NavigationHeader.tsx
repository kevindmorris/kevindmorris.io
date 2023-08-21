"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../kevin-logo.png";
import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Container,
  Divider,
  IconButton,
  List,
  ListItemText,
  MenuItem,
  Typography,
  alpha,
  capitalize,
  useTheme,
} from "@mui/material";
import { Clear, GitHub, LinkedIn, Menu } from "@mui/icons-material";

export default function NavigationHeader() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div
        style={{
          height: 56,
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={logo} height={40} alt="Kevin" />
          </Link>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              gap: "inherit",
            }}
          >
            <Divider orientation="vertical" variant="middle" flexItem />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="button" color="text.disabled">
                Kevin Morris
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                fontStyle="italic"
              >
                Software Developer & Data Scientist
              </Typography>
            </div>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
              gap: "inherit",
            }}
          >
            {["profile", "professional", "projects"].map((route) => (
              <Link key={route} href={`/${route}`}>
                <Button size="small">{capitalize(route)}</Button>
              </Link>
            ))}
          </Box>

          <div
            style={{
              display: "flex",
              gap: "inherit",
            }}
          >
            <IconButton
              href="https://github.com/kevindmorris"
              target="_blank"
              size="small"
              sx={{
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: "40%",
                transition: "all 0.5s ease",
              }}
            >
              <GitHub sx={{ color: theme.palette.text.disabled }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/kevin-m-530572120/"
              target="_blank"
              size="small"
              sx={{
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: "40%",
                transition: "all 0.5s ease",
              }}
            >
              <LinkedIn sx={{ color: theme.palette.text.disabled }} />
            </IconButton>

            <IconButton
              size="small"
              ref={menuRef}
              disableRipple
              onClick={() => setOpen((value) => !value)}
              sx={{
                display: { sm: "inline-flex", md: "none" },
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: "40%",
                transition: "all 0.5s ease",
              }}
            >
              <Clear
                sx={{
                  display: open ? "block" : "none",
                  color: theme.palette.text.disabled,
                }}
              />
              <Menu
                sx={{
                  display: open ? "none" : "block",
                  color: theme.palette.text.disabled,
                }}
              />
            </IconButton>
          </div>
        </Container>
      </div>

      <ClickAwayListener
        onClickAway={(event) => {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
          ) {
            setOpen(false);
          }
        }}
      >
        <Collapse
          in={open}
          sx={{
            position: "fixed",
            top: 56,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid",
            borderColor: theme.palette.divider,
            display: { sm: "block", md: "none" },
          }}
        >
          <List
            onClick={() => setOpen(false)}
            disablePadding
            sx={{
              width: "100vw",
              maxHeight: "calc(100vh - 56px)",
              overflow: "auto",
              "& .MuiTouchRipple-root": { color: theme.palette.primary.main },
            }}
          >
            {["profile", "professional", "projects"].map((route) => (
              <Link
                key={route}
                href={`/${route}`}
                style={{ textDecoration: "none" }}
              >
                <MenuItem>
                  <ListItemText
                    primary={route}
                    primaryTypographyProps={{
                      variant: "button",
                      color: theme.palette.primary.main,
                    }}
                  />
                </MenuItem>
              </Link>
            ))}
          </List>
        </Collapse>
      </ClickAwayListener>
    </>
  );
}
