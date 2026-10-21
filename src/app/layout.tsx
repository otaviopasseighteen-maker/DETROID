import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DETROID | Automotive 3D Showroom",
  description:
    "Explore veículos com uma nova perspectiva. Um showroom digital de carros e motos, começando pela Mitsubishi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
