/**
 * Firebase Admin SDK Configuration
 * 
 * This file is used to initialize the Firebase Admin SDK in the server side, in this case
 * to save the user session in a cookie, server side.
 */

import 'server-only';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import fs from 'fs';

const FIREBASE_ADMIN_SECRET_KEY = JSON.parse(fs.readFileSync(process.env.FIREBASE_ADMIN_SECRET_KEY!, 'utf-8'));
  
const firebaseAdminConfig = {
    credential: cert({
        projectId: FIREBASE_ADMIN_SECRET_KEY.project_id,
        clientEmail: FIREBASE_ADMIN_SECRET_KEY.client_email,
        privateKey: FIREBASE_ADMIN_SECRET_KEY.private_key
    })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}