import { Drawer } from "@/provider/drawer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../provider/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ManuApp",
  description: "Seu painel administrativo de PMOCs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-gray-main dark:text-white bg-gray-background dark:bg-[#2D2D2D] duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Drawer>{children}</Drawer>
        </ThemeProvider>
      </body>
    </html>
  );
}
