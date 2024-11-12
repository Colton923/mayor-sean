import HeroPhoto from "@/public/assets/sean-marching-597x271.png";

export default function Page() {
  return (
    <div>
      <div className="h-96 relative overflow-hidden">
        <img
          src={HeroPhoto.src}
          alt="Sean for Mayor"
          className="object-cover w-full h-full brightness-75 animate-blur-in"
        />
      </div>
      <div className="container mx-auto px-4 py-8 text-center transform -translate-y-full">
        <h1 className="text-6xl text-blue font-extrabold text-decoration underline [text-shadow:_0px_0px_.5rem_white]">
          Sean Cavanaugh
        </h1>
        <h2 className="underline text-2xl text-red [text-shadow:_0px_0px_.5rem_white] pt-4">
          Working for <span className="text-blue font-bold">you.</span>
        </h2>
        <h2 className="underline text-2xl text-red [text-shadow:_0px_0px_.5rem_white] pb-1">
          Working for <span className="text-blue font-bold">change.</span>
        </h2>
      </div>
      <div className="container mx-auto px-4 mw-3xl py-8 text-center">
        <p>
          Sean is a candidate for mayor in Anytown, USA. He is a community
          leader and advocate for change.
        </p>
        <h2 className="font-semibold mb-2">Platform</h2>
        <ul>
          <li>Education</li>
          <li>Healthcare</li>
          <li>Environment</li>
        </ul>
      </div>
    </div>
  );
}
