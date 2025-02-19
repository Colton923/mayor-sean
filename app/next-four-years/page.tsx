import styles from "./TheNextFourYearsPage.module.css";

const SpeechSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const ChevronRight = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6.293 4.293a1 1 0 011.414 0L12 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const KeyPoint = ({ point }: { point: string }) => (
  <div className="flex items-start mb-4">
    <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
    <p>{point}</p>
  </div>
);

export const SeanHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <p className="text-sm text-center text-gray italic">Sean Cavanaugh</p>
      <div className={styles.nextFourYears} />
      <p className="text-sm text-center text-gray italic">
        The Change Monmouth Needs
      </p>
    </div>
  );
};

export default function TheNextFourYearsPage() {
  return (
    <div
      className={`flex flex-col items-center justify-center 
    min-h-screen 
    mx-auto bg-white 
    max-w-full 
    sm:max-w-[700px] 
    shadow-lg mb-20 md:my-40 lg:my-48`}
    >
      <div className="max-w-4xl mx-auto my-20 md:my-4">
        <SeanHeader />
        <div className="max-w-2xl mx-auto p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center">
              The Next Four Years
            </h1>
            Over the next four years my job will be to build a{" "}
            <strong>stronger community </strong>by strengthening the{" "}
            <strong>entire community. </strong> It is time for a change and I am
            here to provide it.
            <SpeechSection title="My Vision">
              In addition to completing current projects, maintaining our
              infrastructure and ensuring our city services are working nicely,
              I have additional plans. As I have publicly stated numerous times,
              I want to attack our housing crisis.
            </SpeechSection>
            <SpeechSection title="Housing Crisis">
              Currently, in Monmouth, we don't have enough housing, whether it
              be for ownership, or quality rentals. We have an aging housing
              stock and “zombie houses”, which accompany our lack of adequate
              housing. We all know people who work in Monmouth, but live out of
              the city and county. It would be better if they could live here.
              <br />
              We need to keep people from moving away, as our population has
              shrunken considerably the past few decades. Less population equals
              less income for the city, schools, other taxing bodies, as well as
              our local businesses. It also lessens our pool of individuals to
              fill jobs.
              <br />
              Galesburg recently had a study done regarding their housing
              crisis, which puts us behind the 8-ball. They have a new,
              up-to-date, incredibly comprehensive plan to remedy their housing
              crisis. We need an action plan before we fall further behind, and
              more people move away.
              <br />
              I want to appoint a task force to focus exclusively on the single
              issue of our housing crisis. We have people here in Monmouth that
              can deliver solutions, as we seek grants; work with legislators;
              lure investment; developers; and locals and outsiders to build,
              remodel and update housing. Those who can fix this problem are
              amongst us. A task force will work when done correctly, and it
              will be done correctly.
              <KeyPoint point={"We need to keep people from moving away."} />
              <KeyPoint
                point={
                  "Less population equals less income for the city, schools, other taxing bodies, as well as our local businesses."
                }
              />
              <KeyPoint
                point={"It also lessens our pool of individuals to fill jobs."}
              />
            </SpeechSection>
            <SpeechSection title="South Side Development">
              Another priority, we need to make a significant effort to develop
              the South side of town. Those living there have told me in every
              way possible, that they feel as if they have been ignored. And
              some people have told me in words I can't use here. One man gave
              me a hug and said, “Thank you for thinking about us.” I am
              thinking about him, and everyone else. My goal isn't to ignore one
              part of town in favor of another, my goal is to give the greatest
              effort in all parts of our wonderful town. The South side has so
              much to offer, and parts are like a blank canvas just waiting to
              be filled in. It is time to paint that canvas. People have been
              waiting for far too long.
              <br />
              People should be proud not only of their town, but of their
              neighborhoods as well.
              <KeyPoint
                point={
                  "We need to make a significant effort to develop the South side of town."
                }
              />
              <KeyPoint
                point={
                  "The South side has so much to offer, and parts are like a blank canvas just waiting to be filled in."
                }
              />
              <KeyPoint point={"It is time to paint that canvas."} />
            </SpeechSection>
            <SpeechSection title="Business Development">
              Next, I will work very hard to recruit small business and large
              business. I will urge large business to expand here – such as Big
              River Resources. As mayor, I will use every resource at my
              disposal to bring business to Monmouth.
              <br />
              I heard during an interview that Monmouth is approached frequently
              by businesses looking to possibly locate here. We only see who
              has, not who has not. Every prospect will be given my full
              attention, as I wish to close the sale. Why leave town, when you
              can get it here? No one person has a monopoly on bringing business
              here, and I will prove that. And when I do, we will all benefit.
              <KeyPoint
                point={
                  "I will work very hard to recruit small business and large business."
                }
              />
              <KeyPoint
                point={
                  "I will urge large business to expand here – such as Big River Resources."
                }
              />
              <KeyPoint
                point={
                  "As mayor, I will use every resource at my disposal to bring business to Monmouth."
                }
              />
            </SpeechSection>
            <SpeechSection title="Community Service">
              Another area of extreme importance to me is to create a culture of
              community service. I want to encourage the wonderful people of
              Monmouth to be more involved in their community. When people
              decide to give of themselves, Monmouth becomes stronger.
              <br />
              Anyone can do something to strengthen our town. It could be
              something as simple as donating to the Knights of Columbus Tootsie
              Roll Drive, which is quite important, or it could be organizing a
              group of people to assist in picking up litter in one of our
              parks. Perhaps you wish to donate a tree to the park district.
              FYI, the park district loves it when people donate trees – they
              can even help you pick one out.
              <br />
              There is no limit to what people can do, when it comes to
              supporting their community. Some people donate funds, which is
              outstanding, and some people donate their time, which is just as
              outstanding.
              <br />
              You may wish to run for office – school board, city council or
              another position. Don’t be afraid to be active, as you do have the
              courage to succeed.
              <br />
              We can all contribute in one way or another. I do it all over the
              place – by choice. You can do it too, by choice. Please do. If you
              do, I promise, you will feel fantastic as a result, and Monmouth
              wins!
              <KeyPoint
                point={
                  "I want to encourage the wonderful people of Monmouth to be more involved in their community."
                }
              />
              <KeyPoint
                point={`When people decide
              to give of themselves, Monmouth becomes stronger.`}
              />
              <KeyPoint
                point={
                  "There is no limit to what people can do, when it comes to supporting their community."
                }
              />
            </SpeechSection>
            <SpeechSection title="Transparency">
              What I intend to do as mayor is not limited by what appears on my
              website or printed materials. I intend to be a mayor for all the
              people of Monmouth, which will involve all kinds of things – none
              of which I fear. I have immense political will, and I intend to
              use it.
              <br />
              There is another important thing that the mayor does – he sets the
              tone. I want to be sure to set a tone of the importance of
              listening and encouraging people to work together.
              <br />
              I want to set a tone for city employees as well as expectations
              that they will do their best in their work to serve the people
              that pay their salaries. I also want the city employees to know
              that am an employee-friendly mayor.
              <br />
              I want a tone of outreach, where hopefully the city can find new
              ways to partner with the college, or businesses and churches to do
              even more together.
              <br />
              Tone, I think, is important. Sean Cavanaugh is here for you, so
              you will not be ignored.
              <br />
              I will be accessible and transparent. I will do what is necessary
              for all of Monmouth to succeed.
              <KeyPoint
                point={
                  "I want to be sure to set a tone of the importance of listening and encouraging people to work together."
                }
              />
              <KeyPoint
                point={
                  "I also want the city employees to know that am an employee-friendly mayor."
                }
              />
            </SpeechSection>
          </div>
          <p>
            Thank you, and God bless you,
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mayor-sean.firebasestorage.app/o/sean-campaign-photos%2Fsign.webp?alt=media&token=8c5dfda8-a240-44b3-8b21-cba94942b1f5"
              }
              alt="Sean Cavanaugh Signature"
            />
            And remember, Sean Cavanaugh for Monmouth, Sean Cavanaugh for YOU!
          </p>
        </div>
      </div>
    </div>
  );
}
