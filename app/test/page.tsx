const allImages = async () => {
  const res = await fetch("http://localhost:3000/api/firestore/storage/images");
  return res.json();
};

const allImageURLs = async () => {
  const resImgs = await allImages();
  const urlPromises = resImgs.imageNames.map(async (name: string) => {
    const res = await fetch(
      `http://localhost:3000/api/firestore/storage/images/${name}`
    );
    return res.json();
  });
  return Promise.all(urlPromises); // Wait for all URLs to resolve
};

export default async function Page() {
  const images = await allImageURLs(); // Await the resolved URLs
  // console.log("images: ", images);
  return (
    <div>
      <h1>Images</h1>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={`Image_${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
