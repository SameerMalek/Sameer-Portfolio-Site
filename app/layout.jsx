import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./../components/Header";
import PageTransition from "@/components/pageTransition";
import TransitionEffect from "@/components/TransitionEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Portfolio-Mohammad Sameer Malek",
  description: "This is Sameer's Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <TransitionEffect/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
