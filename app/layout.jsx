import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./../components/Header";
import PageTransition from "@/components/pageTransition";
import TransitionEffect from "@/components/TransitionEffect";
import SmoothScroll from "@/components/site/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://sameer-portfolio-site.vercel.app"),
  title: "Sameer Malek | Forward-Deployed AI Engineer, Calgary",
  description:
    "I live in the gap between the demo and the deployment. Co-Founder and CIO of Orchestrator AI Systems in Calgary, working forward-deployed: embedded inside client businesses, shipping production AI, agent, and vision systems end to end.",
  keywords: [
    "Forward-Deployed Engineer",
    "AI Engineer",
    "Agentic systems",
    "RAG",
    "Computer Vision",
    "Calgary",
    "Orchestrator AI Systems",
    "Sameer Malek",
  ],
  authors: [{ name: "Sameer Malek" }],
  openGraph: {
    type: "website",
    title: "Sameer Malek | Forward-Deployed AI Engineer, Calgary",
    description:
      "I live in the gap between the demo and the deployment. Production AI, agent, and vision systems, shipped and run end to end.",
    url: "https://sameer-portfolio-site.vercel.app",
    siteName: "Sameer Malek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Malek | Forward-Deployed AI Engineer, Calgary",
    description:
      "I live in the gap between the demo and the deployment. Production AI, agent, and vision systems, shipped and run end to end.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <SmoothScroll />
        <Header />
        <TransitionEffect/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
