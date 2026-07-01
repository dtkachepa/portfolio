import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidenav } from "@/components/Sidenav";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Dickson Tinashe Kachepa — AI / ML Engineer",
  description:
    "Portfolio of Dickson Tinashe Kachepa, an electrical engineer transitioning into AI/ML. Reinforcement learning, deep learning, NLP and computer vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Devicon icon font/CSS for the Technologies section bubbles */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {/* Persistent left navigation — never unmounts */}
        <Sidenav />
        {/* Page content sits to the right of the 56px sidenav */}
        <div className="ml-[56px]">{children}</div>
      </body>
    </html>
  );
}
