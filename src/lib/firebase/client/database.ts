import app from "@/lib/firebase/client/firebase";
import { getDatabase } from 'firebase/database';

export const database = getDatabase(app);
