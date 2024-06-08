"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@apollo/client";
import { GetProfileByUserIdQuery, GetProfileByUserIdDocument, GetProfileByUserIdQueryVariables } from "@/generated/graphql";
import { useRouter } from "next/navigation";

export type Viewer = GetProfileByUserIdQuery['profiles'][0];

interface ViewerContextType {
  viewer: Viewer | null;
  setViewer: (viewer: Viewer) => void;
}

const ViewerContext = createContext<ViewerContextType>({
  viewer: null,
  setViewer: () => {},
});

export const ViewerContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const { data } = useQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, {
    variables: {
      user_id: user?.uid ?? '',
    }
  });

  const router = useRouter();

  useEffect(() => {
    if (data && data.profiles.length > 0) {
        const profile = data.profiles[0];
        setViewer(profile);
    }

    if (!user) {
      setViewer(null);
    }

    if (user && data && data.profiles.length === 0) {
      router.push('/protected/profile');
    }

  }, [data, user]);

  return (
    <ViewerContext.Provider value={{ viewer, setViewer }}>
      {children}
    </ViewerContext.Provider>
  );
};

export const useViewer = () => {
  return useContext(ViewerContext);
};