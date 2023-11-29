import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Metadata } from "next";

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
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
