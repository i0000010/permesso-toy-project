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

const HASURA_JWT_CLAIM_URL = "https://hasura.io/jwt/claims";

// this executes client side
export async function signInWithGoogle(router: AppRouterInstance, nextRoute: string): Promise<void> {
    console.log('signin with google')
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider).then(async (result) => {
            if (result.user) {
                let token = await result.user.getIdToken();

                // Not sure I need to do this (get the hasura claim). All I need
                // is the uid, which I can get from the decoded token.
                // I included this because I followed some instructions from this link
                // which says to do it. Will look into it more later.
                // https://hasura.io/blog/authentication-and-authorization-using-hasura-and-firebase
                const idTokenResult = await result.user.getIdTokenResult();
                const hasuraClaim: HasuraClaim = idTokenResult.claims[HASURA_JWT_CLAIM_URL] as HasuraClaim;

                if (!hasuraClaim) {
                    console.error("No Hasura claim found in token.");
                    return;
                }

                // TODO: this conditional is modified from
                // https://hasura.io/blog/authentication-and-authorization-using-hasura-and-firebase
                // it is not impelmented correctly yet
                // if (!hasuraClaim) {
                //     // Check if refresh is required.
                //     const metadataRef = firebase
                //         .database()
                //         .ref("metadata/" + result.user.uid + "/refreshTime");

                //     token = metadataRef.on("value", async (data) => {
                //         if(!data.exists) return
                //         // Force refresh to pick up the latest custom claims changes.
                //         const token = await result.user.getIdToken(true);
                //         return token;
                //     });
                // }

                const url = `${process.env.NEXT_PUBLIC_URL}/api/signin`;
                console.log('url: ', url)
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    console.log('response ok')
                    router.push(nextRoute);
                }
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

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/signout`, {
            method: "POST",
        });

        if (response.ok) {
            router.push("/");
        }
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}