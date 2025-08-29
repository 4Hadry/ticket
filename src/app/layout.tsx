import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";
import Providers from "@/providers/AppProvider";
// import Providers from "./Providers";

const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={instrument_sans.className}>
        <Providers>
          <div className="relative min-h-screen">
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
