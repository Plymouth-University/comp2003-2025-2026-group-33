// app/for-business/page.tsx
import type { Metadata } from "next";
import { HowItWork } from "@/components/home/legacy/HowItWork";
import { SubscribePlan } from "@/components/home/legacy/SubscribePlan";
import { Section } from "@/components/layout/Section";
import { TrustedCompanies } from "@/components/marketing/TrustedCompanies";

export const metadata: Metadata = {
  title: "I'm Brand Owner - Engame",
  description: "Sell More With Tap Master",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ImBrandOwnerPage() {
  return (
    <>
      {/* Hero section - yellow background */}
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
        <div className="relative">
          <Section bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-0">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-1 text-4xl">
                  Gamify Your Business!
                  <br />
                  Bring The Sales In!
                </p>
                <p className="text-center md:text-left font-montserrat font pb-4 text-xl">
                  Win over new and repeat customers by placing your brand,
                  products and offers in our <b>Game to Sales</b> platform that
                  has all the gamifying tools built in
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
                    src="/assets/images/brand-owner/EG---Landing-brand_top-main(D).png"
                    width={959}
                    height={800}
                    alt="home-1"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* "How Tap Master Helps" + feature cards - white background */}
      <div className="bg-white">
        <Section>
          <div className="flex flex-col items-center space-y-2 py-14">
            <p className="text-center font-montserrat font-bold text-3xl">
              How Tap Master Helps Your Business
            </p>

            <p className="text-center font-montserrat font text-lg">
              Tap Master allows you to reap the lucrative benefits of
              gamification without the massive headaches of development, you are
              just a few clicks away from the benefits!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 3xl:gap-20">
              {[
                {
                  title: "Up to 50% Increased Leads & Sales!",
                  desc: "Featuring your products and offers in Tap Master keeps your new and repeat customers hyped before they even enter your shop! Our numbers show 63 out of 100 vouchers are redeemed! 900% higher redemption rate with Tap Master! ",
                  imageUrl:
                    "/assets/images/brand-owner/EG---Landing-brand_icon-1(D).png",
                },
                {
                  title: "Up to 3200% Increased Brand Stickiness!",
                  desc: "With Tap Master, you will go from a 5 seconds ‘can't wait to skip Youtube ads’ to ‘willingly play a game and look at your brand or products’ for a whooping 180 seconds! This will cause the players to think about your brand much often!",
                  imageUrl:
                    "/assets/images/brand-owner/EG---Landing-brand_icon-2(D).png",
                },
                {
                  title: "Up to 300 Hours of Advertisement!",
                  desc: "With just 200 players playing your game 3 minutes a day for a month, you will get 300 hours worth of advertisement! For USD49, the amount of advertisement value is totally unbeatable! How much can you get from Facebook or Google with USD49?",
                  imageUrl:
                    "/assets/images/brand-owner/EG---Landing-brand_icon-3(D).png",
                },
              ].map((i, k) => (
                <div
                  key={`why-${k}`}
                  className="flex flex-col justify-start items-center border-2 border-yellow-400 rounded-2xl px-8 py-8"
                >
                  <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4 rounded-lg overflow-hidden">
                    <img
                      src={i.imageUrl}
                      width={800}
                      height={800}
                      alt="home-2"
                    />
                  </div>

                  <p className="text-center font-montserrat font-bold text-3xl md:text-2xl mb-3">
                    {i.title}
                  </p>

                  <p className="text-center max-w-xs font-lato font-medium text-xl md:text-base">
                    {i.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* "It's as simple as 1-2-3" + voucher steps - white background */}
      <div className="bg-white">
        <HowItWork mediaUrl="/assets/videos/1280x800.mp4" />

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10 md:gap-6 xl:gap-20">
            {[
              {
                title: "1. Upload your vouchers to us on our website",
                imageUrl:
                  "/assets/images/brand-owner/EG---Landing_brand_voucher-1(D).jpg",
              },
              {
                title: "2. Your vouchers will be listed in our Game as Reward",
                imageUrl:
                  "/assets/images/brand-owner/EG---Landing_brand_voucher-2(D).jpg",
              },
              {
                title:
                  "3. Game Start! Players To Win The Vouchers From Your Games!",
                imageUrl:
                  "/assets/images/brand-owner/EG---Landing_brand_voucher-3(D).jpg",
              },
            ].map((i, k) => (
              <div
                key={`brand-${k}`}
                className="flex flex-col items-center space-y-4"
              >
                <div className="max-w-xs flex justify-center rounded-lg overflow-hidden">
                  <img src={i.imageUrl} width={600} height={400} alt="home-2" />
                </div>

                <p className="text-center md:text-left font-montserrat font-bold text-3xl md:text-xl capitalize">
                  {i.title}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <SubscribePlan backgroundImage />

      <TrustedCompanies />
    </>
  );
}

