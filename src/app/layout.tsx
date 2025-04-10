import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Poppins, } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: "400"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '300', '400']
});


export const metadata: Metadata = {
  title: "Felipe Grellmann",
  description: "Veja o portifóliio de Felipe Grellmann, Veja mais sobre ele, seus projetos pessoais e suas habilidade.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
