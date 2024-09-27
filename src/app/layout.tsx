import localFont from "next/font/local";
import { Roboto } from "next/font/google";

import "./globals.css";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style: ["normal"],
  variable: "--roboto",
  subsets: ["latin"],
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased `}
      >
        <Menu op1="Home" op2="Maths" op3={true} op4={9} />
        {children}
        <Footer op1="Footer da Pagina" op2="Cabo o Footer" />
      </body>
    </html>
  );
}
