import NavigationHeader from "@/components/NavigationHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kevindmorris.io | Kevin Morris",
  description: "The portfolio of Kevin Morris.",
  themeColor: "#8A89E7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <NavigationHeader />
          <Container>{children}</Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
