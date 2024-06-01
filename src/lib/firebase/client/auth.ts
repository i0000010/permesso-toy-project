import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "@/lib/firebase/client/firebase";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

interface HasuraClaim {
    "x-hasura-user-id": string;
    "x-hasura-default-role": string;
    "x-hasura-allowed-roles": string[];
}

export const auth = getAuth(app);

export const HASURA_JWT_CLAIM_URL = "https://hasura.io/jwt/claims";

// this executes client side
export async function signInWithGoogle(router: AppRouterInstance, nextRoute: string): Promise<void> {
    console.log('signin with google')
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider).then(async (result) => {
            if (result.user) {
                let token = await result.user.getIdToken();
                console.log('not idTokenResult: ', token, '\n');

                // Not sure I need to do this (get the hasura claim). All I need
                // is the uid, which I can get from the decoded token.
                // https://hasura.io/blog/authentication-and-authorization-using-hasura-and-firebase
                const idTokenResult = await result.user.getIdTokenResult();
                console.log("idTokenResult: ", idTokenResult.claims, "\n");
                const hasuraClaim: HasuraClaim = idTokenResult.claims[HASURA_JWT_CLAIM_URL] as HasuraClaim;

                if (!hasuraClaim) {
                    console.error("No Hasura claim found in token.");
                    // Check if refresh is required.
                    return;
                }

                router.push(nextRoute);
                return;
            } else {
                console.log('no user')
            }
        });
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function signOutUser(router: AppRouterInstance) {
    try {
        await signOut(auth);
        router.push("/");

        // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/signout`, {
        //     method: "POST",
        // });

        // if (response.ok) {
        //     router.push("/");
        // }
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}

export async function getViewerToken(): Promise<string | null> {
    const token =  await auth.currentUser?.getIdToken() ?? null;
    return token;
}