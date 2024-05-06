/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const processSignUp = functions.auth.user().onCreate(async (user) => {
  // Define the custom claims
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": user.uid,
    },
  };

  // Set the custom claims on the user
  try {
    await admin.auth().setCustomUserClaims(user.uid, customClaims);
    logger.log("Custom claims set for user", {uid: user.uid});
    // Update real-time database to notify client to force refresh.
    const metadataRef = admin.database().ref("metadata/" + user.uid);
    // Set the refresh time to the current UTC timestamp.
    // This will be captured on the client to force a token refresh.
    return metadataRef.set({refreshTime: new Date().getTime()});
  } catch (error) {
    logger.error(
      "Failed to set custom user claims",
      {uid: user.uid, error: error}
    );
  }
});
