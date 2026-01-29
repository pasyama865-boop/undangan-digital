import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google"; 
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel", 
  weight: ["400", "700"],    
});

const lato = Lato({ 
  subsets: ["latin"], 
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Wedding of Romeo & Juliet",
  description: "Minggu, 21 Februari 2026. Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i...",
  openGraph: {
    title: "The Wedding of Romeo & Juliet",
    description: "Undangan Pernikahan Digital",
    url: "https://undangan-digital-kamu.vercel.app", 
    siteName: "Romeo & Juliet Wedding",
    images: [
      {
        url: "/images/thumbnail.jpg", 
        width: 1200,
        height: 630,
        alt: "Romeo & Juliet Wedding Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${cinzel.variable} ${lato.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}