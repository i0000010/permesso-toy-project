import 'server-only';
import Navbar from "@/components/nav/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import clsx from 'clsx';
import { cookies } from 'next/headers';
import { ApolloWrapper } from '@/lib/apollo/wrapper';
import { AuthContextProvider } from '@/context/AuthContext';
import { ViewerContextProvider } from '@/context/ViewerContext';

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
        <AuthContextProvider>
          <ApolloWrapper>
            <ViewerContextProvider>
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 min-h-screen h-full">
                <Navbar />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-3xl py-16 lg:py-0">
                    {modal}
                    {children}
                  </div>
                </div>
                <div id="modal-root" />
              </div>
            </ViewerContextProvider>
          </ApolloWrapper>
        </AuthContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;