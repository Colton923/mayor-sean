import Image from "next/image";
import aboutimg from "@/public/assets/sean-marching-597x271.webp";

export default function Sean() {
  return (
    <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={aboutimg.src} // Replace with your image path
          alt="Sean"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          My name is Sean Cavanaugh.
        </h1>
        <p className="text-gray-600">
          {`I was born and raised in Monmouth, by my
          parents Mike and Nancy. After graduating Monmouth High School, I
          attended Augustana College, graduating with a double-major in Public
          Administration and Political Science. Following college, I moved to
          Chicago, where I was a claims adjustor / accident investigator for the
          insurance company that insured the taxi cabs. It was quite
          interesting, to say the least. I learned more there, than with any
          other job. When working with lawyers, police, claimants, and all other
          sorts in Chicago, you learn a lot – fast: to work hard, be thorough,
          don’t waste time, rely on facts, be decisive, always be fair, and not
          to get pushed around. My jobs have helped strengthen my core skills –
          problem solving, fundraising, delivering on promises, showing
          compassion toward others, community involvement, and more. I was
          turning into the man I was going to be, and did become. While living
          in Bettendorf, Iowa, I held positions with two consulting firms where
          my many clients included, the Quad City River Bandits, Iowa Telecom,
          and an overseas client. I was also the Director of Government Affairs
          for three REALTOR associations in Iowa, who pooled their resources to
          hire me. My efforts and results were recognized, as I was seen as a
          man who gets things done. As a result, I was asked to be more
          involved. Davenport's Abandoned Housing Task Force (charter member).
          The Village of East Davenport's Marketing Committee. Davenport's
          Comprehensive Plan Steering Committee. And more. In 2008, my father
          passed away, five years after my loving mother. I moved back to
          Monmouth to help settle their estate. My intention was to take care of
          things here, then head back to Bettendorf. Fate had other plans. In
          Monmouth, people I have known my whole life were everywhere – wishing
          me well, telling stories about mom and dad, asking about my siblings,
          and showing they really cared. It was incredibly refreshing. I loved
          it. I loved being back in Monmouth – my hometown. One evening I
          received a call asking if I would be interested in running for the
          County Board. After thinking it over I said, “Absolutely!” I have
          served 15 years on the County Board – nearly 12 years as Chairman of
          the Buildings & Grounds Committee. I still serve in that capacity and
          have a long list of accomplishments. The most notable accomplishment
          is making the jail project a reality. It was thought to be unlikely to
          happen, due to the fact it didn’t succeed in the past. I thought of it
          differently and wanted to see it built. It took a lot of political
          will, and in the end, the board came together and rallied around the
          project. The referendum passed by a huge margin. For nearly three
          years, I was the Executive Director for the Warren County United Way.
          I surpassed yearly fundraising goals, under budget – while during a
          recession. Hundreds of thousands of dollars were dispersed to local
          organizations serving our communities. In 2014, I was hired by Warren
          Achievement Center as a Marketing Coordinator. I am still there. It is
          incredibly rewarding serving an organization that cares for adults
          living with developmental disabilities. I wear many hats and have
          enjoyed many successes. It is a wonderful place to work. While in
          Monmouth, I have been quite involved: Current Chairman of the
          Tri-County Resource and Waste Management Council. Serve on the Union
          Negotiation, Budget, and Executive Committees for the County Board.
          Current member of the 911 Commission. 2017 Monmouth Area Chamber of
          Commerce Citizen of the Year. Active member the Kiwanis Club of
          Monmouth and the Monmouth Rotary Club. Served eight years, seven as
          Vice-President on the Board for West Central Leadership. I could go
          on, but for the sake of time, I will not. I have a problem by not
          being able to say “no” when it comes to the giving of myself. I once
          read if you want something done right, choose someone who is busy, as
          they are busy for a reason – they are achieving. I am a very busy man.
          When thinking of a campaign slogan, I had a million ideas, but the one
          that stuck is, “Sean Cavanaugh for Monmouth – Sean Cavanaugh for YOU!”
          It makes sense, as that is the true me. I am here to serve all
          Monmouth citizens, in all neighborhoods, and I have immense political
          will to take on any project, any issue and to do what is necessary to
          get things done for everyone. I will also be accessible. My goal in
          life is to do the best I can for where I am from. Monmouth has needs,
          and I want to be part of the solution. I am asking for your vote, so
          together, we can provide Monmouth a most successful future. Remember,
          Sean Cavanaugh for Monmouth – Sean Cavanaugh for YOU! Thank you.`}
        </p>
      </div>
    </div>
  );
}
