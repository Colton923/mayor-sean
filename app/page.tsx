import ContactForm from "@/components/forms/ContactForm/ContactForm";
import HeroPhoto from "@/public/assets/bust-no-bg.png";
import usa from "@/public/assets/usa.jpg";
import landingPageImage from "@/public/assets/sean-marching-597x271.png";
import { marked } from "marked";
import styles from "@/styles/Markdown.module.css";

export default function Page() {
  const LandingPageMarkdown = `
  # Sean Cavanaugh for Mayor
  Sean Cavanaugh is a candidate for mayor in the city of Monmouth, Illinois. He is running on a platform of change and progress, and is committed to working for the people of Monmouth.

  ## About Sean
  Sean Cavanaugh is a lifelong resident of Monmouth, Illinois. He has been active in local politics for many years, and has a proven track record of working for the people of Monmouth.

  ## Why Vote for Sean?
  Sean Cavanaugh is the best candidate for mayor of Monmouth. He has the experience, the vision, and the commitment to make Monmouth a better place for all its residents.

  ## Get Involved
  If you would like to get involved in Sean Cavanaugh's campaign for mayor, please contact us using the form below.

  # Contact Us
  If you have any questions or comments, please feel free to contact us using the form below.
  `;
  const LandingPageHTML = marked(LandingPageMarkdown);

  return (
    <div className="min-h:screen">
      <div className="relative">
        <img
          src={usa.src}
          alt="background image"
          className="h-screen w-full object-cover object-center"
        />
        <img
          src={HeroPhoto.src}
          alt="Sean for Mayor"
          className="h-screen w-full absolute bottom-0 left-0 max-h-[600px] max-w-[400px] object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="flex flex-row justify-center items-center w-full bg-black bg-opacity-50 flex-wrap mx-auto">
        <div id="overlay" className="absolute h-full bg-black bg-opacity-50 ">
          <div className="flex flex-row justify-between items-center w-full bg-black bg-opacity-50 flex-wrap mx-auto">
            <div className="flex flex-col px-4 py-8 text-center animate-blur-in">
              <h1 className="uppercase text-5xl text-blue font-extrabold text-decoration [text-shadow:_1px_0px_.5rem_rgba(255,255,255,0.5)_,_1px_-1px_.5rem_rgba(255,255,255,0.5)_]">
                Sean Cavanaugh
              </h1>
              <h2 className="text-3xl text-red [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] pt-4">
                Working for{" "}
                <span className="underline text-blue font-bold text-4xl [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_,_-1px_-1px_.5rem_white_,_-1px_1px_.5rem_white_]">
                  you.
                </span>
              </h2>
              <h2 className="text-3xl text-red [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] pb-1">
                Working for{" "}
                <span className="underline text-blue font-bold text-4xl [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_,_-1px_-1px_.5rem_white_,_-1px_1px_.5rem_white_]">
                  change.
                </span>
              </h2>
            </div>
            <div className="hidden lg:flex flex-col px-4 py-8 text-center">
              <ContactForm c="black" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 shadow-lg bg-white bg-opacity-90 max-w-5xl">
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: LandingPageHTML }}
        />
        <div className="md:flex px-4 py-8 text-center w-full justify-center">
          <ContactForm c="black" />
        </div>
      </div>
    </div>
  );
}
