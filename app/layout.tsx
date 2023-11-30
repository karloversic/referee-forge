import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "RefereeForge",
  description:
    "RefereeForge is the ultimate companion app designed to sculpt and refine the skills of aspiring karate referees. Through interactive modules users can forge their judgment abilities, ensuring they are well-prepared for karate referee exams.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
