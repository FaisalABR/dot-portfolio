import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/molecules/Navbar";
import { Footer } from "@/components/molecules/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Faisal Abu Bakar Riza Portfolio",
  description:
    "Faisal abu bakar riza personal portfolio that showcase faisal's work result",
};

export default function RootLayout({
  children,
  hero,
  about,
  skills,
  projects,
  faq,
  contacts,
}: Readonly<{
  children: React.ReactNode;
  hero: React.ReactNode;
  about: React.ReactNode;
  skills: React.ReactNode;
  projects: React.ReactNode;
  faq: React.ReactNode;
  contacts: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <Navbar />
        {hero}
        {about}
        {skills}
        {projects}
        {faq}
        {contacts}
        {children}
        <Footer />
      </body>
    </html>
  );
}
