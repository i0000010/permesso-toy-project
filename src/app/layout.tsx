import 'server-only';
import Navbar from "@/components/nav/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import clsx from 'clsx';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Permesso",
  description: "Immigration forum",
};

interface RootLayoutProps {
  modal: ReactNode;
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ modal, children }) => {
  
  const darkTheme: boolean = cookies().get('x-theme')?.value === 'dark';
  
  return (
    <html lang="en">
      <body className={clsx(inter.className, {'dark': darkTheme})}>
          <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-screen ">
            <Navbar />
            {modal}
            {children}
            <div id="modal-root" />
          </div>
      </body>
    </html>
  );
}

export default RootLayout;