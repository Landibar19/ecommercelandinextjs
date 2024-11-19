import { Inter } from 'next/font/google';
import  Nav  from "@/components/Nav/nav";
import Header from "@/components/Header/header";
import Footer from '@/components/Footer/Footer';
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
<link 
href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
 rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Header />
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}