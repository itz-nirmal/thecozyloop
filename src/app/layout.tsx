import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import TCLFavicon from "../../assets/Brand Assets/TCL logo loop.png";
import { FomoPopup } from "./feature/FOMO-Popup";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FFF8E7",
};

export const metadata: Metadata = {
  title: "The Cozy Loop - Crochet & Gifts",
  description: "Handmade with love - Creating beautiful moments and unforgettable gifts for your loved ones",
  icons: [
    { rel: "icon", url: TCLFavicon.src },
    { rel: "apple-touch-icon", url: TCLFavicon.src },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const brSonoma = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-duplet",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${brSonoma.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <FomoPopup enabled={true} maxNotifications={7} />
      </body>
    </html>
  );
}
