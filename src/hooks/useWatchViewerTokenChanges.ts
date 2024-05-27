import { useEffect } from 'react';
import { auth } from '@/lib/firebase/client/auth';
import type { User } from 'firebase/auth';
import { HasuraClaims } from '@/constants/auth';
import { HASURA_CLAIMS_KEY } from '@/constants/auth';
import { onValue, ref } from 'firebase/database';
import { database } from '@/lib/firebase/client/database';

interface UpdateResponse {
  user: User | null;
  token: string | null;
  userId: string | null | undefined;
  claims: HasuraClaims | null;
}

const updateViewerToken = (
  user: User | null,
  shouldForceRefresh?: boolean,
): Promise<UpdateResponse> => {

  let token: string | null = null;

  return new Promise(async (resolve) => {
    if (user) {
      const firebaseToken = await user.getIdToken(shouldForceRefresh);
      const idTokenResult = await user.getIdTokenResult();
      const userId = idTokenResult.claims.userId as string;
      const hasuraClaim = idTokenResult.claims[HASURA_CLAIMS_KEY] as HasuraClaims;
      token = firebaseToken;

      if (hasuraClaim) {
        return resolve({ user, token, userId, claims: hasuraClaim });
      } else {
        // NOTE: This is using the older Firebase database, but since it's transient data, it should be trivial to change or even simply use a Poll to look for claims
        // Check if refresh is required.
        const metadataRef = ref(database, 'metadata/' + user.uid + '/refreshTime');

        onValue(metadataRef, async (data) => {
          if (!data.exists()) return;
          // Force refresh to pick up the latest custom claims changes.
          token = await user.getIdToken(true);
          const idTokenResult = await user.getIdTokenResult();
          const userId = idTokenResult.claims.userId as string;
          const hasuraClaim = idTokenResult.claims[HASURA_CLAIMS_KEY] as HasuraClaims;

          return resolve({ user, token, userId, claims: hasuraClaim });
        });
      }
    } else {
      token = null;
      return resolve({ user, token, userId: null, claims: null });
    }
  });
};

type FirebaseCallback = ({ user, token }: UpdateResponse) => void;

const useWatchViewerTokenChanges = (callback: FirebaseCallback) => {
  useEffect(() => {

    const handleAuthStateChanged = async (user: User | null) => {
      const updateTokenResponse = await updateViewerToken(user, true);
      callback(updateTokenResponse);
    //   if (user) {
    //     const res = await updateViewerToken(user, true);
    //     callback(res);
    //   } else {
    //     callback({ success: false, error: 'No user' });
    //   }
    };

    // const handleIdTokenChanged = async (user) => {
    //   if (user) {
    //     const res = await updateViewerToken(user);
    //     callback(res);
    //   } else {
    //     callback({ success: false, error: 'No user' });
    //   }
    // };

    // Subscribe to auth state changes
    const unsubscribeAuthState = auth.onAuthStateChanged(handleAuthStateChanged);
    // Subscribe to ID token changes if needed
    // const unsubscribeIdToken = auth.onIdTokenChanged(handleIdTokenChanged);

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeAuthState();
      // unsubscribeIdToken();
    };
  }, [callback]);
};

export default useWatchViewerTokenChanges;
