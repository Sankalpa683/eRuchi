import { Geist, Geist_Mono, Inter, Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/homepage/navbar";
import Footer from "./components/footer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap", // Improves font loading performance
// });

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ['latin'], // Include only the subsets you need
});

export const metadata = {
  title: "eRuchi",
  description: "eRuchi (E. Ruchi Pvt. Ltd.) is a startup pioneering a new approach to consumer engagement in Nepal with our unique service: targeted product sampling. We connect brands with the right consumers by delivering tailored product samples directly to individuals most likely to appreciate and benefit from them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} antialiased`}
      >
        <Navbar />
        {children}
        <hr />
        <Footer className="max-w-[1400px] mx-auto w-full" />
      </body>
    </html>
  );
}
