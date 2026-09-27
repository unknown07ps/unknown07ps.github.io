import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { SmoothScroll } from "@/app/components/smooth-scroll";
export const metadata:Metadata={title:"Sagar Prajapati — AI/ML Engineer",description:"Sagar Prajapati — AI/ML Engineer and Software Engineer. AI systems, distributed systems, RAG, computer vision and DevOps."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><ThemeProvider><SmoothScroll/>{children}</ThemeProvider></body></html>}
