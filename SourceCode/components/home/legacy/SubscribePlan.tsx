// components/home/legacy/SubscribePlan.tsx
"use client";

import { Section } from "@/components/layout/Section";
import { useModalContext } from "@/context/ModalContext";
import { FiCheckCircle } from "react-icons/fi";

export function SubscribePlan({
  backgroundImage,
  backgroundImageUrl = "/assets/images/backgrounds/EG---bg.jpg",
}: {
  backgroundImage?: boolean;
  backgroundImageUrl?: string;
}) {
  const { setModalName } = useModalContext();

  const plans = [
    {
      title: "Starter Package",
      price: "FREE",
      desc: "Get complete access to the first level and learn exactly how Tap Master works! You’ll get to..",
      descList: [
        "Promote to our growing player base!",
        "Access to your voucher dashboard!",
        "Attend exclusive Tap Master workshop!",
        "Win a month of Business Package!",
      ],
      isPopular: false,
      onClick: () => setModalName("signup"),
    },
    {
      title: "Business",
      price: "$99",
      desc: "Best choice for you to start featuring your brand & products in Tap Master! You’ll get to..",
      descList: [
        "Ten (10) slot for your brand or product",
        "Promote to our growing player base!",
        "Access to your voucher dashboard!",
        "Know your customers who played your game",
        "Attend exclusive Tap Master workshop!",
      ],
      isPopular: true,
      onClick: () => setModalName("signup2"),
    },
    {
      title: "Professional",
      price: "$299",
      desc: "Ultimate choice for next level customisation for maximum marketing effect! You’ll get to..",
      descList: [
        "Fully customise games to your needs",
        "Twenty (20) slot for your brand or product",
        "Promote to our growing player base",
        "Access to your voucher dashboard",
        "Know your customers who played your game",
        "Attend exclusive Tap Master workshop!",
      ],
      isPopular: false,
      onClick: () => setModalName("signup2"),
    },
  ];

  return (
    <div
      style={
        backgroundImage
          ? {
              backgroundImage: `url('${backgroundImageUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      className={backgroundImage ? "" : "bg-white"}
    >
      <Section bgColor="bg-transparent" className="py-12">
        <div className="flex flex-col items-center">
          <p className="text-center uppercase font-montserrat font-semibold text-3xl mb-2">
            Pick a plan to boost your sales, brand, and market with now!
          </p>
          <hr className="mb-5 mx-auto w-1/3 border-black border-2" />
          <p className="text-center max-w-3xl font-lato font-medium text-xl capitalize mb-10">
            Boost your Sales, Customer Experience, and Brand Stickiness!{" "}
            <b>All</b> in Tap Master!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 2xl:gap-10">
            {plans.map((plan, pricingIndex) => (
              <div
                key={`pricing-${pricingIndex}`}
                className={`bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between relative overflow-hidden ${
                  plan.isPopular ? "border-2 border-black" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="w-20 absolute top-0 right-0 overflow-hidden inline-block">
                    <div className="h-20 bg-black transform rotate-45 origin-bottom-right flex-1 flex items-end -ml-8 px-8">
                      <p className="text-center text-white capitalize font-montserrat font-bold text-xs">
                        Popular Choice
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col space-y-4">
                  <p className="text-left font-montserrat font-bold text-xl capitalize">
                    {plan.title}
                  </p>
                  <p className="text-left font-lato font-thin text-xl">
                    <span className="font-montserrat font-bold text-3xl">
                      {plan.price}
                    </span>
                    /monthly
                  </p>
                  <p className="text-left font-lato">{plan.desc}</p>
                  <ol>
                    {plan.descList.map((li, k) => (
                      <li
                        key={`${pricingIndex}-desc-${k}`}
                        className="flex space-x-2 text-left font-lato font-bold"
                      >
                        <span className="text-yellow-400 text-lg pt-1">
                          <FiCheckCircle />
                        </span>
                        <p>{li}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <button
                  onClick={plan.onClick}
                  className="w-full px-2 py-1 mt-6 text-base bg-black text-white rounded border border-black font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
                >
                  Sign Up Now!
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
