import "./globals.css";
import "react-day-picker/dist/style.css";

import Navigation from "@/components/Navigation";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {Inter} from "next/font/google";
import {cookies} from "next/headers";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const supabase = createServerComponentClient({cookies});

export default async function RootLayout({children}) {
  const {data} = await supabase.auth.getSession();
  const user = data.session?.user;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation user={user}></Navigation>
        {children}
      </body>
    </html>
  );
}
