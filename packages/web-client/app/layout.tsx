import { type Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components/shared";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LenDen",
  description: "Generated by create next app",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/site/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/site/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/site/favicon-16x16.png"
        />
        <link rel="manifest" href="/site/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/site/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <link rel="shortcut icon" href="/site/favicon.ico" />
        <meta name="msapplication-TileColor" content="#9cff1f" />
        <meta name="msapplication-config" content="/site/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>

      <body className={syne.className}>
        <Navbar />
        <section className="w-full min-h-full flex-1">{children}</section>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
