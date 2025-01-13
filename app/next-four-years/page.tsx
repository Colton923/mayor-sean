import Image from "next/image";
import aboutimg from "@/public/assets/sean-marching-597x271.webp";

export default function About() {
  return (
    <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={aboutimg.src} // Replace with your image path
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Next Four Years
        </h1>
        <p className="text-gray-600">
          {`

Over the next four years my job will be to build a stronger community by strengthening the entire community.

In addition to completing current projects, maintaining our infrastructure and ensuring our city services are working nicely, I have additional plans.

As I stated numerous times, I want to attack our housing crisis.

Currently, in Monmouth, we don't have enough housing, whether it be for ownership, or quality rentals. We have an aging housing stock and “zombie houses”, which accompany our lack of adequate housing. We all know people who work in Monmouth, but live out of the city and county.

We need to keep people from moving away, as our population has shrunken considerably the past few decades. Less population equals less income for the city, schools, other taxing bodies, as well as our local businesses. It also lessens our pool of individuals to fill jobs.

The Galesburg study mentioned earlier puts us behind the 8-ball. They have a new, up-to-date, incredibly comprehensive plan to remedy their housing crisis. We need an action plan before more people move away.

I want to appoint a task force to focus exclusively on the single issue of our housing crisis. We have people here in Monmouth that can deliver solutions, as we seek grants; work with legislators; lure investment; developers; and locals and outsiders to build, remodel and update housing. Those who can fix this problem are amongst us. A task force can work when done correctly.

Another priority, we need to make a significant effort to develop the South side of town. Those living there have told me in every way possible, that they feel as if they have been ignored. And some people have told me in words I can't use here. One man gave me a hug and said, “Thank you for thinking about us.” I am thinking about him, and everyone else.

My goal isn't to ignore one part of town in favor of another, my goal is to give the greatest effort in all parts of our wonderful town. The South side has so much to offer, and parts are like a blank canvas just waiting to be filled in. It is time to paint that canvas.

People should be proud not only of their town, but of their neighborhoods as well.

Next, just as all good mayors do, I will work very hard to recruit small business and large business. I will urge large business to expand here – such as Big River Resources. I will use every resource at my disposal to bring business to Monmouth.

I heard during an interview that Monmouth is approached frequently by businesses looking to possibly locate here. We only see who has, not who has not. Every prospect will be given my full attention, as I wish to close the sale. Why leave town, when you can get it here? No one person has a monopoly on bringing business here, and I aim to prove that. And when I do, we will all benefit.

Another area of extreme importance to me is to create a culture of community service. I want to encourage the wonderful people of Monmouth to be more involved in their community. When people decide to give of themselves, Monmouth becomes stronger.

As stated earlier, anyone can do something to strengthen our town. It could be something as simple as donating to the Knights of Columbus Tootsie Roll Drive, which is quite important, by the way, or it could be organizing a group of people to pick up litter in one of our parks.

There is no limit to what people can do, when it comes to supporting their community. Some people donate funds, which is outstanding, and some people donate their time, which is just as outstanding.

We can all contribute in one way or another. I do it all over the place – by choice. You can do it too, by choice. Please do. If you do, I promise, you will feel fantastic as a result.

What I intend to do as mayor is not limited by what I have said today. I intend to be a mayor for the people of Monmouth, which will involve all kinds of things – none of which I fear.

There is another important thing that the mayor does – he sets the tone. I want to be sure to set a tone of the importance of listening and encouraging people to work together.

I want to set a tone for city employees as well as expectations that they will do their best in their work to serve the people that pay their salaries.

I want a tone of outreach, where hopefully the city can find new ways to partner with the college, or businesses and churches to do even more together.

Tone, I think, is important.

Thank you, God bless you, and remember, Sean Cavanaugh for Monmouth, Sean Cavanaugh for you!
`}
        </p>
      </div>
    </div>
  );
}
