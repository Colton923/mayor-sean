import { storage } from "../../../../../firebase/firebaseAdmin";

export async function GET() {
  try {
    const bucket = storage.bucket("gs://mayor-sean.firebasestorage.app");
    const [files] = await bucket.getFiles();

    const imageNames = files.map((file) => file.name);
    return new Response(JSON.stringify({ imageNames }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
