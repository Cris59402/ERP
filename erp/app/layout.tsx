import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebard/Sidebar";
import { GlobalStylesProviders } from "./providers/GlobalStylesProviders";
import { ContextProvider } from "./providers/ContextProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERP",
  description: "Create an ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {userId} = auth();

  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <ContextProvider>
        <GlobalStylesProviders>
        {userId && <Sidebar />}
        <div className="w-full">{children}</div>
        </GlobalStylesProviders>
        </ContextProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
