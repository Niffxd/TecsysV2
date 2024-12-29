import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TecSys",
  description: "Simplificamos el diagnóstico de tu iPhone en segundos y garantiza un servicio transparente y eficiente",
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
