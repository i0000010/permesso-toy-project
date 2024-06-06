"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle, signOutUser } from "@/lib/firebase/client/auth";
import type { User } from "firebase/auth";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import useWatchViewerTokenChanges from "@/hooks/useWatchViewerTokenChanges";

interface AuthContextType {
  user: User | null;
  logIn: (router: AppRouterInstance) => void;
  logOut: (router: AppRouterInstance) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

export const AuthContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const logIn = (router: AppRouterInstance) => signInWithGoogle(router, '/protected/profile');

  const logOut = (router: AppRouterInstance) => signOutUser(router);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  useWatchViewerTokenChanges(({ user, token }) => {
    console.log('useWatchViewerTokenChanges: ', user, token);
  });

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};