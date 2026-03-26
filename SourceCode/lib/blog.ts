// lib/blog.ts

export type BlogType = {
  avatar: string;
  author: string;
  datetime: string;
  image: string;
  image_lg: string;
  title: string;
  desc: string;
  content: string;
};

export const blogs: BlogType[] = [
  {
    avatar: "/assets/images/icons/icon.png",
    author: "Engame",
    datetime: "2022-07-13 10:48",
    image_lg: "/assets/images/blog/engame_can_games_boost_sales.gif",
    image: "/assets/images/blog/engame_can_games_boost_sales.gif",
    title: "Can Games Boost Sales?",
    desc: 'Replace the "games" in the title with anything, say "advertisements", "social media", "gurus", "wind & water"...',
    content: `<div>
      <p>Replace the "games" in the title with anything, say "advertisements", "social media", "gurus", "wind &amp; water", "cats" or anything you could think of, might be the most asked question by majority of the business owners and you, if you are reading this.</p>
      <br />
      <p>Obviously, we won't be talking about cats and water here, that's not why we are here, but how games can benefit your sales and not dumping money into the sea, terms and conditions applied, puns not intended, more on this later.</p>
      <br />
      <p>So, let us define the term "gamification" as a start to clear the air up for us, it is the strategic attempt to enhance systems, services, organizations, and activities by creating similar experiences to those experienced when playing games in order to motivate and engage users.</p>
      <br />
      <p>Now, let's get to the "terms and conditions applied" earlier, gamification can indeed benefit not just sales, but brand image, value and customers' experience greatly, only if it's being done properly. Sadly, this isn't the case with many deployments out there.</p>
      <br />
      <p>One of the main reasons is the "game" part is missing from the "gamification"; simply adding "point collection system", "fancy dashboard" or even a "scratch &amp; win system" IS NOT gamification.</p>
      <br />
      <p>So yes, gamification WORKS, when it's done properly; gamification can be one of the most powerful marketing tools to boost sales in whatever industry that you are in.</p>
      <br />
      <p>Refer to the link below for further reading on gamification:<br />https://dx.doi.org/10.1108/JSM-01-2015-0045</p>
    </div>`,
  },
  {
    avatar: "/assets/images/icons/icon.png",
    author: "Engame",
    datetime: "2022-04-02 19:33",
    image: "/assets/images/blog/engame_maxis_top_startup.jpg",
    image_lg: "/assets/images/blog/engame_maxis_top_startup.jpg",
    title: "Maxis Market Access Day Top 100 Startups",
    desc: "Shortly after we were awarded the Commercial Ready Game winner, we were informed by Maxis that we were selected to be...",
    content: `<div>
      <p>In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge), we squeezed ourselves into the finalist but falls short in the final round; it's clear that our game with commercial elements wasn't ready and we stuffed the idea into the deep freeze.</p>
      <br />
      <p>Fast forward to late 2019, where we just pivoted to B2B games platform for enterprise, DiCE (Digital Content Creation Challenge) came up and we submitted in a blink of an eye; coupled with several improvements on gameplay, commercial elements and market positioning, we're able to win this time, and this signifies that our game as a service platform is ready to roll.</p>
    </div>`,
  },
  {
    avatar: "/assets/images/icons/icon.png",
    author: "Engame",
    datetime: "2022-03-11 14:31",
    image: "/assets/images/blog/engame_mdec_dice_winner.jpg",
    image_lg: "/assets/images/blog/engame_mdec_dice_winner.jpg",
    title: "MDEC DiCE 2019 Commercial Ready Game Winner",
    desc: "In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge)...",
    content: `<div>
      <p>In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge), we squeezed ourselves into the finalist but falls short in the final round; it's clear that our game with commercial elements wasn't ready and we stuffed the idea into the deep freeze.</p>
      <br />
      <p>Fast forward to late 2019, where we just pivoted to B2B games platform for enterprise, DiCE (Digital Content Creation Challenge) came up and we submitted in a blink of an eye; coupled with several improvements on gameplay, commercial elements and market positioning, we're able to win this time, and this signifies that our game as a service platform is ready to roll.</p>
    </div>`,
  },
];