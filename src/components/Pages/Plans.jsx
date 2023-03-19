import React from "react";
import PlansCard from "../Cards/PlansCard";

const Plans = () => {
  const cardText = [
    {
      cardOption: "STARTER",
      cardPrice: "$9.99/month",
      cardFeature: [
        "Real-time chat",
        "Customization options",
        "File Sharing",
        "Visitor Tracking",
      ],
      cardBackground: "bg-[#4635F3]",
    },
    {
      cardOption: "PROFESSIONAL",
      cardPrice: "$29.99/month",
      cardFeature: [
        'All features in the "Starter" plan',
        "Mobile app",
        "Integration with other tools",
        "Multilingual support",
      ],
      cardBackground: "bg-[#f5ac76]",
    },
    {
      cardOption: "ENTERPRISE",
      cardPrice: "$99.99/month",
      cardFeature: [
        'All features in the "Professional" plan',
        "Dedicated account manager",
        "Premium support",
        "Custom integration options",
      ],
      cardBackground: "bg-[#ff5391]",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-full md:max-w-4xl xl:max-w-6xl mx-auto md:flex flex-col gap-[40px] items-center py-[100px]">
        <div className="flex flex-col gap-[10px] items-center px-6 sm:px-0">
          <h1 className="font-Merriweather font-bold text-[38px] leading-[54px] text-center">
            Affordable Plans for Any Business
          </h1>
          <p className="leading-[26px] max-w-[556px] w-full text-center">
            Our pricing plans are designed to be affordable for businesses of
            all sizes. From our "Starter" plan to our "Enterprise" option, we
            have a plan that will fit your budget and meet your live chat needs.
          </p>
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row items-center gap-[30px] px-6 xl:px-0">
          {cardText.map((item) => {
            return (
              <PlansCard
                cardOption={item.cardOption}
                cardBackground={item.cardBackground}
                cardFeature={item.cardFeature}
                cardPrice={item.cardPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
