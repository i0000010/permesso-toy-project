/**
 * This file contains the logic to sign in a user using Firebase Auth.
 * 
 * In this case, using the Firebase Admin SDK to create a session cookie
 */
import { auth } from "firebase-admin";
import { customInitApp } from "@/lib/firebase/server/firebase-admin-config";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Init the Firebase SDK every time the server is called
customInitApp();

export async function POST(request: NextRequest, response: NextResponse) {
  const authorization = headers().get("Authorization");
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];

    console.log('idToken: ', idToken, '\n');
    const decodedToken = await auth().verifyIdToken(idToken);
    console.log('decodedToken: ', decodedToken);

    if (decodedToken) {
      console.log('decodedToken: ', decodedToken);
      //Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        // httpOnly: false,
        secure: true,
      };

      // Add the cookie to the browser
      cookies().set(options);
    }

    // const userId = decodedToken?.uid;
    // console.log('userId: ', userId);
    // const xHasuraUserId = headers().get("x-hasura-user-id");
    // console.log('x-user-id: ', xHasuraUserId);
  }

  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: NextRequest) {
    const session = cookies().get("session")?.value || "";
  
    //Validate if the cookie exist in the request
    if (!session) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);
  
    if (!decodedClaims) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    return NextResponse.json({ isLogged: true }, { status: 200 });
  }