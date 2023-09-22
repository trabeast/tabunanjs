import Link from "next/link";
import "./globals.css";
import "react-day-picker/dist/style.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="mx-5">
          <ul>
            <li>
              <Link href={"/"}>Tabunan</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
