'use client';
import type { ReactNode } from "react";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { makeClient } from '@/lib/apollo/clientClient';
import { AuthContextProvider } from "@/context/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
  return (
    <AuthContextProvider>
      <ApolloNextAppProvider makeClient={makeClient}>
        {children}
      </ApolloNextAppProvider>
    </AuthContextProvider>
  );
}

export default Layout;