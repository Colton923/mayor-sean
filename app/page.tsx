import HeroPhoto from "@/public/assets/bust-no-bg.webp";
import Link from "next/link";
import ContactPage from "./contact/page";
import CampaignCard from "@/components/CampaignCard/CampaignCard";
import bgPhoto from "@/public/assets/bg1.jpg";
import Slogan from "@/components/Slogan/Slogan";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto py-36">
        <div className="flex flex-col px-4 py-4 text-center">
          <h1 className="uppercase text-5xl text-blue font-extrabold text-decoration max-w-5xl">
            {`"Everything I have done in my life has led me to this very moment."`}
            <br />
            <br />
            <p className="text-3xl text-red [text-shadow:_0px_0px_3px_white_,_0px_0px_3px_white_]">
              - Sean Cavanaugh
            </p>
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-col justify-center">
        <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto pt-4">
          <button className="bg-blue text-white font-bold py-2 px-4 m-1">
            <Link href="/sean">Learn More</Link>
          </button>
          <button className="bg-blue text-white font-bold py-2 px-4 m-1">
            <Link href="/forum">Q & A</Link>
          </button>
          <button className="bg-blue text-white font-bold py-2 px-4 m-1">
            <Link href="/next-four-years">Next 4 Years</Link>
          </button>
          <button className="bg-blue text-white font-bold py-2 px-4 m-1">
            <Link href="/yard-signs">Yard Signs</Link>
          </button>
          <button className="bg-blue text-white font-bold py-2 px-4 m-1">
            <Link href="/recipes">My Recipes</Link>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto gap-4 py-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2FSean%20Cavanaugh.webp?alt=media&token=35b757b6-f3c8-4e39-bffb-20e99202749f"
            alt="Sean Cavanaugh"
            className="w-full md:w-[280px] lg:w-[310px] xl:w-[400px]"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2Fsean11.webp?alt=media&token=374c7e9e-6335-49fc-adce-2703dffde585"
            alt="Sean Cavanaugh"
            className="w-full md:w-[280px] lg:w-[310px] xl:w-[400px]"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2Fs22.webp?alt=media&token=a1ced8d5-003d-4504-b68e-94d2d7f7f720"
            alt="Sean Cavanaugh"
            className="w-full md:w-[280px] lg:w-[310px] xl:w-[400px]"
          />
        </div>
      </div>
      <Slogan />
      <div
        className="w-full bg-blue font-extrabold text-white text-center tracking-widest 
  text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] whitespace-nowrap hidden lg:block"
      >
        VOTE APRIL 1ST 2025
      </div>
    </div>
  );
}
