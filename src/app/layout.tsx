import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DO TUONG VAN | Senior Frontend Developer",
  description: "Portfolio of Do Tuong Van, a Senior Frontend Developer specializing in React, Next.js, and modern web architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable}`}
    >
      <body>
        <div className="layout-overlay"></div>
        <nav className="navbar fade-in-up">
          <div className="nav-logo">DTV.</div>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Do Tuong Van. Engineered with precision.</p>
        </footer>
      </body>
    </html>
  );
}
