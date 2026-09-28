import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";
const display = Sora({ subsets: ["latin"], variable: "--font-sora" });
const body = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
export const metadata: Metadata = {
  title: "Full Stack AI Engineer",
  description:
    "From AI ideas to production-ready systems: RAG, multi-agent AI and cloud-native full-stack engineering.",
};
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
