import ContactForm from "@/components/forms/ContactForm/ContactForm";
import HeroPhoto from "@/public/assets/sean-marching-597x271.png";
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
    <div className="min-h:screen ">
      <img
        src={HeroPhoto.src}
        alt="Sean for Mayor"
        className="h-screen w-full object-cover object-[80%]"
      />
      <div className="flex flex-row justify-center items-center w-full bg-black bg-opacity-50 flex-wrap mx-auto">
        <div id="overlay" className="absolute h-full bg-black bg-opacity-50 ">
          <div className="flex flex-row justify-between items-center w-full bg-black bg-opacity-50 flex-wrap mx-auto">
            <div className="flex flex-col px-4 ml-8 py-8 text-center animate-blur-in">
              <h1 className="text-6xl text-blue font-extrabold text-decoration underline [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_]">
                Sean Cavanaugh
              </h1>
              <h2 className="underline text-3xl text-red [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] pt-4">
                Working for{" "}
                <span className="text-blue font-bold text-4xl [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_,_-1px_-1px_.5rem_white_,_-1px_1px_.5rem_white_]">
                  you.
                </span>
              </h2>
              <h2 className="underline text-3xl text-red [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] pb-1">
                Working for{" "}
                <span className="text-blue font-bold text-4xl [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_,_-1px_-1px_.5rem_white_,_-1px_1px_.5rem_white_]">
                  change.
                </span>
              </h2>
            </div>
            {/* only visible if screen is > 768px */}
            <div className="hidden lg:flex flex-col px-4 py-8 text-center">
              <ContactForm c="black" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: LandingPageHTML }}
        />
        <img src={landingPageImage.src} alt="Sean for Mayor" />
      </div>
    </div>
  );
}
