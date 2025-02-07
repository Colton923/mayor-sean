import ContactForm from "@/components/forms/ContactForm/ContactForm";
import HeroPhoto from "@/public/assets/bust-no-bg.webp";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <div className="relative h-screen w-full">
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2Fbg1.webp?alt=media&token=17da695c-812f-4399-90d0-55e15da9d1fe`}
          alt="background image"
          className="h-screen w-full object-cover object-center filter brightness-50"
        />
        <img
          src={HeroPhoto.src}
          alt="Sean for Mayor"
          className="h-screen w-full absolute bottom-0 left-0 max-h-[450px] max-w-[300px] object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent"></div>
      </div>
      <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto">
        <div id="overlay" className="absolute h-full ">
          <div className="flex flex-row justify-between items-center w-full flex-wrap mx-auto">
            <div className="flex flex-col px-4 py-4 text-center animate-blur-in mt-32">
              <h2 className="text-4xl text-white [text-shadow:_1px_1px_1px_black_,_1px_-1px_1px_black_,_-1px_-1px_1px_black_,_-1px_1px_1px_black_]  pt-4">
                Sean Cavanaugh for
                <span className="underline text-blue font-bold text-4xl [text-shadow:_1px_1px_1px_white_,_1px_-1px_1px_white_,_-1px_-1px_1px_white_,_-1px_1px_1px_white_] px-2">
                  Monmouth.
                </span>
              </h2>
              <h2 className="text-4xl text-white [text-shadow:_1px_1px_1px_black_,_1px_-1px_1px_black_,_-1px_-1px_1px_black_,_-1px_1px_1px_black_]  pb-1">
                Sean Cavanaugh for
                <span className="underline text-blue font-bold text-4xl [text-shadow:_1px_1px_1px_white_,_1px_-1px_1px_white_,_-1px_-1px_1px_white_,_-1px_1px_1px_white_] px-2">
                  you.
                </span>
              </h2>
            </div>
            <div className="hidden lg:flex flex-col px-4 py-8 text-center">
              <ContactForm contactFormType="contact" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto min-h-screen">
        <div className="flex flex-col px-4 py-4 text-center mt-20">
          <h1 className="uppercase text-5xl text-blue font-extrabold text-decoration [text-shadow:_1px_0px_1px_rgba(255,255,255,.9)_,_1px_-1px_.5rem_rgba(255,255,255,0.5)_] max-w-5xl">
            {`"Everything I have done in my life has led me to this very moment."`}
            <br />
            <br />
            <p className="text-3xl text-red [text-shadow:_0px_0px_3px_white_,_0px_0px_3px_white_]">
              - Sean Cavanaugh
            </p>
          </h1>
        </div>
      </div>
      <div className="flex min-h-screen">
        <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto">
          <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto">
            <button className="bg-blue text-white font-bold py-2 px-4 rounded-full m-1">
              <Link href="/sean">Learn More</Link>
            </button>
            <button className="bg-blue text-white font-bold py-2 px-4 rounded-full m-1">
              <Link href="/forum">Q & A</Link>
            </button>
            <button className="bg-blue text-white font-bold py-2 px-4 rounded-full m-1">
              <Link href="/next-four-years">Next 4 Years</Link>
            </button>
            <button className="bg-blue text-white font-bold py-2 px-4 rounded-full m-1">
              <Link href="/yard-signs">Yard Signs</Link>
            </button>
            <button className="bg-blue text-white font-bold py-2 px-4 rounded-full m-1">
              <Link href="/recipes">My Recipes</Link>
            </button>
          </div>
          <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto gap-1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2Fsean11.webp?alt=media&token=374c7e9e-6335-49fc-adce-2703dffde585"
              alt="Sean Cavanaugh"
              width={300}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2FSean%20Cavanaugh.webp?alt=media&token=35b757b6-f3c8-4e39-bffb-20e99202749f"
              alt="Sean Cavanaugh"
              width={300}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2Fs22.webp?alt=media&token=a1ced8d5-003d-4504-b68e-94d2d7f7f720"
              alt="Sean Cavanaugh"
              width={300}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto min-h-screen">
        <div className="flex flex-col px-4 py-4 text-center mt-20">
          <h1 className="uppercase text-xl text-blue font-extrabold text-decoration [text-shadow:_1px_0px_1px_rgba(255,255,255,.9)_,_1px_-1px_.5rem_rgba(255,255,255,0.5)_] max-w-5xl">
            Sean Cavanaugh for Monmouth,
            <br />
            Sean Cavanaugh for YOU.
          </h1>
        </div>
      </div>
      <div className="md:flex px-4 py-8 text-center w-full justify-center">
        <ContactForm contactFormType="contact" />
      </div>
    </div>
  );
}
