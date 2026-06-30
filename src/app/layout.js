import { Playfair_Display, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

// 1. Signature Serif for Headlines
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// 2. Clean Sans-Serif for Body Text
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

// 3. Monospace for Small Caps and Labels
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Medium (500) is crucial for our small-caps design
  variable: "--font-plex",
  display: "swap",
});

export const metadata = {
  title: "Nexus | Premium Design & Strategy",
  description: "A luxury design studio crafting timeless digital experiences through classical restraint and editorial precision.",
  keywords: ["Design Studio", "Editorial Design", "Next.js", "Luxury Branding"],
  openGraph: {
    title: "Nexus | Premium Design & Strategy",
    description: "A luxury design studio crafting timeless digital experiences through classical restraint and editorial precision.",
    url: "https://nexus-agency.com",
    siteName: "Nexus Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200", // Swapped to a more editorial/architectural placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`scroll-smooth ${playfair.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        
        {/* Main content grows to push footer to the bottom if content is short */}
        <main className="flex-grow">{children}</main>
        
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}