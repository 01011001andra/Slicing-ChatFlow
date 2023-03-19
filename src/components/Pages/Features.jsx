import React from "react";
import Card from "../Cards/Card";

const Features = () => {
  const cardText = [
    {
      title: "Real-time chat",
      text: "Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their customers, improving their experience on the website.",
      icon: "Realtime.svg",
    },
    {
      title: "Customization options",
      text: "Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.",
      icon: "Custom.svg",
    },
    {
      title: "Visitor tracking",
      text: "Our live chat product includes visitor tracking capabilities, allowing users to see who is on their website and what pages they are viewing. This can help users understand the needs and interests of their visitors and provide more targeted support.",
      icon: "Visitor.svg",
    },
    {
      title: "Automated chat responses",
      text: "Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to focus on more complex or specific issues.",
      icon: "Automated.svg",
    },
    {
      title: "Mobile app",
      text: "Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and provide support no matter where they are.",
      icon: "Mobile.svg",
    },
    {
      title: "Integration with other tools",
      text: "Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer interactions and data from a single platform.",
      icon: "Integration.svg",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full h-full md:max-w-4xl xl:max-w-6xl mx-auto md:flex flex-col gap-[40px] items-center py-[100px] ">
        <div className="flex flex-col items-center max-w-2xl gap-[10px]">
          <h1 className="font-Merriweather font-bold text-[38px] text-black text-center">
            Powerful Features to Enhance Your Live Chat Experience
          </h1>
          <p className="max-w-lg w-full font-SourceSansPro text-[#0D082C] text-center leading-[26px] px-6 md:px-0">
            Our live chat product is packed with features to help you connect
            with your customers and provide them with the support they need.
          </p>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-[30px] mt-10 sm:mt-0 px-6 md:px-0">
          {cardText.map((item) => {
            return (
              <Card
                icon={`./${item.icon}`}
                text={item.text}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
