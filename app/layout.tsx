import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Transitionprovider from "@/components/Transitionprovider"
export const metadata: Metadata = {
  title: "ShowcaseSphere",
  description: "Laxman's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Transitionprovider>{children}</Transitionprovider>
        </body>
    </html>
  );
}
