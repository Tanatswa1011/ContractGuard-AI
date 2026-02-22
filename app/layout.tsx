import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractGuardAI",
  description: "Never miss a contract deadline again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
