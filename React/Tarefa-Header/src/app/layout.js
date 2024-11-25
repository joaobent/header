import "./globals.css";
import Header from "@/components/Header";
import React from "react";

export const metadata = {
  title: "Site do Bento",
  description: "Algo",
  charset: 'UTF-8',
  author: 'João Pedro Bento de Andrade',
  keywords: 'legal, amigo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>

    </html>
  );
}
