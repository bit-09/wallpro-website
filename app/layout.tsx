import { Montserrat } from "next/font/google";
import "./globals.css"; // THIS IS THE CRITICAL LINE

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "WallPro India | Premium Wall & Floor Printing Solutions",
  description: "Transforming Walls Into Masterpieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-brand-ivory text-brand-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}