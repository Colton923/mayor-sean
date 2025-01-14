import { storage } from "../../../../../../firebase/firebaseAdmin";
// import { getDownloadURL } from "firebase-admin/storage";

export async function GET(
  request: Request,
  { params }: { params: { image: string[] } }
) {
  try {
    // Extract the slug parameter
    const { image } = await params;
    // Create a reference to the specific file in Firebase Storage
    const fileRef = storage
      .bucket("gs://mayor-sean.firebasestorage.app")
      .file(`${image.join("/")}`);

    // Generate a signed URL for the file
    const [url] = await fileRef.getSignedUrl({
      action: "read",
      expires: Date.now() + 60 * 60 * 1000, // 1 hour expiration
    });

    // Return the URL as a JSON response
    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors (e.g., file not found or access denied)
    return new Response(
      JSON.stringify({ error: error || "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
