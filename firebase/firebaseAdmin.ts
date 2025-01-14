import * as admin from "firebase-admin";

const serviceAccount: admin.ServiceAccount = {
  projectId: "mayor-sean",
  privateKey: process.env.PRIVATE_KEY!.replace(/\\n/g, "\n"), // Replace escaped newlines
  clientEmail: "firebase-adminsdk-9gcil@mayor-sean.iam.gserviceaccount.com",
};
if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mayor-sean.firebaseio.com",
  });

export const storage = admin.storage();

export default admin;
