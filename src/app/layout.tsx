import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

// Load Poppins and Montserrat fonts
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

// Set metadata for the portfolio site
export const metadata: Metadata = {
  title: "Mumair - Portfolio",
  description: "Portfolio of Mumair, showcasing skills, projects, and services.",
  // openGraph: {
  //   type: "website",
  //   url: "https://your-portfolio-website.com", // Replace with your website URL
  //   title: "Mumair - Portfolio",
  //   description: "Explore Mumair's portfolio with a showcase of skills and projects.",
  //   images: [
  //     {
  //       url: "/images/portfolio-cover.jpg", // Add an image for social sharing
  //       width: 1200,
  //       height: 630,
  //       alt: "Portfolio cover image",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Mumair - Portfolio",
  //   description: "Portfolio of Mumair, showcasing skills, projects, and services.",
  //   images: ["/images/portfolio-cover.jpg"], // Use a relevant image
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will automatically handle the metadata */}
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
