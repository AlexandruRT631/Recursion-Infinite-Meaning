import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recursion - How simple rules create infinite meaning",
  description:
    "A personal and formal exploration of recursion through symbols, mathematics, fractals, and feedback loops.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
