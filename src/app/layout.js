import { Inter, Syncopate } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syncopate = Syncopate({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

export const metadata = {
  title: "EXTREME PROJECT | Premium Prebuilt Coil",
  description:
    "Handmade Prebuilt Coil & Organic Cotton Premium nomor #1 sejak 2021. Dirancang untuk performa dan flavor maksimal.",
  openGraph: {
    title: "EXTREME PROJECT | Premium Prebuilt Coil",
    description: "Experience The Next Level Of Flavor.",
    images: ["/assets/og-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${syncopate.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
