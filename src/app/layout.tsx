import NavigationHeader from "@/components/NavigationHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kevindmorris.dev | Kevin Morris",
  description: "The portfolio of Kevin Morris.",
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
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
