import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// Load the premium fonts
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "WallPro India | Premium Wall & Floor Printing",
  description: "Transforming walls and floors into masterpieces in Hyderabad. High-definition vertical printing for architecture and interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      {/* Apply Montserrat as the default font, keep the luxury background */}
      <body className="font-sans bg-[#F5F4F0] text-[#1A1A1A] antialiased selection:bg-[#1A1A1A] selection:text-[#F5F4F0]">
        {children}
      </body>
    </html>
  );
}