// components/home/HomeClient.tsx
"use client";

import { useModalContext } from "@/context/ModalContext";
import { Section } from "@/components/layout/Section";
import { PartnerContent } from "@/components/home/legacy/PartnerContent";
import { BrandCarousel } from "@/components/home/legacy/BrandCarousel";
import { HowItWork } from "@/components/home/legacy/HowItWork";
import { HowWork } from "@/components/home/legacy/HowWork";
import { TrendingGame } from "@/components/home/legacy/TrendingGame";
import { SubscribePlan } from "@/components/home/legacy/SubscribePlan";

export default function HomeClient() {
  const { setModalName } = useModalContext();

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/assets/images/backgrounds/EG---bg.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          perspective: "5px",
        }}
      >
        <div className="relative bg-transparent">
          <Section bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-1">
              <div className="flex flex-col justify-center space-y-2 py-10">
                <p className="text-center md:text-left font-montserrat font-bold pb-1 text-4xl">
                  BOOST YOUR SALES IN 30 DAYS WITH TAP MASTER
                </p>
                <hr className="mx-auto md:mx-0 w-1/4 md:w-1/4 border-black border-2 " />
                <p className="text-center md:text-left font-montserrat pb-4 text-xl">
                  Transform your digital marketing strategy with TapMaster, the easy-to-use platform to boost your sales and promote your brand!
                </p>
                <button
                  onClick={() => setModalName("signup")}
                  className="w-full uppercase md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg"
                >
                  Sign-Up Now!
                </button>
              </div>

              <div className="flex flex-col justify-center space-y-2 px-10 py-5">
                <video className="w-full h-full rounded-lg" autoPlay muted loop playsInline>
                  <source src="/assets/videos/1280x800.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Section>
        </div>

        <PartnerContent backgroundImage />

        <div
          style={{
            backgroundImage: "url('/assets/images/backgrounds/EG---bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-center items-end mb-8 md:mb-0 bg-yellow-400 relative"
        />

        <BrandCarousel />

        <div className="bg-white">
          <div
            style={{
              backgroundImage: "url('/assets/images/backgrounds/EG---bg-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex justify-center items-end mb-8 md:mb-0 bg-yellow-400 relative"
          >
            <Section bgColor={"bg-transparent"}>
              <div className="flex flex-col items-center space-y-2 py-10">
                <p className="font-montserrat font-semibold text-3xl uppercase text-center">
                  Discover What Our Ecosystem Has to Offer - Take a Look!
                </p>
                <hr className="mx-auto w-1/4 text-center border-black border-2 " />
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {[
                    {
                      title: "24,000+",
                      desc: "And Increasing Monthly Players",
                      image_url: "/assets/images/games/EG---Landing-home_icon-1(D).png",
                    },
                    {
                      title: "1,000+",
                      desc: "Monthly Voucher Redemptions",
                      image_url: "/assets/images/games/EG---Landing-home_icon-5(D).png",
                    },
                    {
                      title: "35K+ Hours",
                      desc: "Monthly Play Time",
                      image_url: "/assets/images/games/EG---Landing-home_icon-6(D).png",
                    },
                  ].map((i, k) => (
                    <div key={k} className="flex flex-col justify-start items-center">
                      <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4 rounded-lg overflow-hidden">
                        <img src={i.image_url} alt="metric" />
                      </div>
                      <p className="text-center font-montserrat font-bold text-3xl md:text-xl inline-block">
                        {i.title}
                      </p>
                      <p className="text-center font-montserrat font-bold text-xl px-10 md:text-base">
                        {i.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center font-montserrat font-semibold text-3xl pt-5">
                  Now, Imagine 1% Of This Going To Your Business
                </p>
              </div>
            </Section>
          </div>
        </div>

        <Section>
          <div className="flex flex-col space-y-6 md:space-y-5 py-10">
            <p className="text-center font-montserrat font-semibold text-3xl uppercase">
              No Code! Even Grandmas Can Do It!
              <hr className="mx-auto w-1/4 md:w-1/4 text-center border-black border-2 mt-2 " />
            </p>

            <h6 className="text-center font-montserrat text-2xl">
              Just upload your brand logo or product images to <b>Tap Master</b> and you are good to go!
            </h6>

            <div className="flex flex-col-reverse md:flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    title: "No Coding Needed!",
                    desc: "Our No-Code platform allows you to create games for your business without writing a single line of code. So easy that even kids can do it!",
                  },
                  {
                    title: "Plenty To Choose From!",
                    desc: "Select your games from our collection of unique games that fit your brand and products, then customise them instantly to compliment your marketing campaigns and events!",
                  },
                ].map((i, k) => (
                  <div
                    key={`no-code-${k}`}
                    className="rounded-2xl bg-yellow-100 p-10 flex flex-col justify-normal"
                  >
                    <p className="font-montserrat font-bold text-2xl mb-4">{i.title}</p>
                    <p className="font-lato text-lg">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h6 className="text-center font-montserrat font-semibold text-2xl">
              Join TapMaster and Watch Your Sales Skyrocket - Subscribe Now!
            </h6>

            <div className="flex justify-center">
              <button
                onClick={() => setModalName("signup")}
                className="w-full uppercase md:w-60 px-5 py-2 border border-black bg-black text-white rounded text-xl font-segoeui font-bold hover:opacity-90 hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </Section>

        <div className="bg-white md:pt-8 lg:pt-18 xl:pt-28 2xl:pt-36">
          <div
            style={{
              backgroundImage: "url('/assets/images/backgrounds/EG---bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex justify-center items-end mb-8 md:mb-0 bg-yellow-400 md:h-28 lg:h-40 2xl:h-42 relative"
          >
            <div className="h-80 items-end hidden md:flex">
              <img
                src="/assets/images/home/EG---Landing-home_arcade(D).png"
                alt="arcade desktop"
              />
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <img
            src="/assets/images/home/EG---Landing-home_arcade(M).png"
            alt="arcade mobile"
          />
        </div>

        <HowItWork mediaUrl="https://engame.tech/assets/images/1920x700.mp4" />

        <HowWork />

        <TrendingGame />

        <div className="bg-white py-10">
          <Section bgColor="transparent">
            <div className="flex flex-col items-center">
              <p className="font-montserrat font-semibold text-center text-3xl">
                SUBSCRIBE AND BOOST SALES TODAY!
              </p>
              <hr className="mt-2 mb-5 mx-auto w-1/3 md:w-1/6 text-center border-black border-2 " />
              <p className="font-montserrat text-center text-2xl">
                Get access to Tap Master for less than $3 a day!
              </p>
            </div>

            <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10">
              <div className="flex flex-col space-y-2 md:col-span-1 order-first md:order-last">
                <div className="flex flex-col justify-center items-center">
                  <img src="/assets/images/home/home_4.png" alt="home visual" />
                </div>
                <div className="flex justify-center item-center">
                  <button
                    onClick={() => setModalName("signup")}
                    className="w-full uppercase md:w-60 px-5 py-2 border border-black bg-black text-xl text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2 md:col-span-1 ">
                <ul className="font-montserrat text-left list-decimal text-xl leading-8">
                  <li className="font-semibold text-2xl">Customised Games</li>
                  <p className="py-2">
                    Customize games to match your brand and business from our pool of fun games.
                  </p>

                  <li className="font-semibold text-2xl">Unlimited Vouchers</li>
                  <p className="py-2">
                    Upload as many vouchers as you want into Tap Master for FREE!
                  </p>

                  <li className="font-semibold text-2xl">Ever-growing player base</li>
                  <p className="py-2">
                    The number of active players on Tap Master is rising day by day, bringing in more customers and more revenue
                  </p>

                  <li className="font-semibold text-2xl">Robust Community</li>
                  <p className="py-2">
                    Join our private network to connect with business owners and stay updated on local and global news.
                  </p>

                  <li className="font-semibold text-2xl">Exciting Events</li>
                  <p className="py-2">
                    Collaborate with us to organize effective online/offline events that promote your products with Tap Master.
                  </p>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        <SubscribePlan backgroundImageUrl="/assets/images/backgrounds/EG---bg-2.jpg" onSubscribe={() => setModalName("signup")} />
      </div>
    </>
  );
}
    </>
  );
}
