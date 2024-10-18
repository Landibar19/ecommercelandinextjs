import { Inter } from 'next/font/google';
import  Nav  from "@/components/Nav/nav";
import Header from "@/components/Header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description: "E-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </head>
      <body className={inter.className}>
        <Header />
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}