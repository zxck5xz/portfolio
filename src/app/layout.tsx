import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import GoToTop from "@/components/GoToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DO TUONG VAN | AI-Adjacent React Engineer",
  description:
    "Portfolio of Do Tuong Van — AI-Adjacent React Engineer. 13 production AI projects: streaming chat, RAG pipelines, multi-agent orchestration, voice AI, eval dashboards. Built with Next.js, Gemini, Cloudflare Workers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <div id="preloader">
          <div className="jumping-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `window.addEventListener("load",function(){var p=document.getElementById("preloader");if(p){p.style.opacity="0";setTimeout(function(){p.style.display="none"},500)}});`,
        }} />

        <Nav />
        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-row">
              <div className="social-links-row footer-social">
                <a href="https://github.com/zxck5xz" target="_blank" rel="noreferrer"><img src="/icons/github.svg" alt="GitHub" /></a>
                <a href="https://linkedin.com/in/dotuongvan" target="_blank" rel="noreferrer"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
              </div>
              <div className="footer-copyright">
                <p>&copy; Copyright Do Tuong Van {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </footer>

        <GoToTop />
      </body>
    </html>
  );
}
