import React from "react";
import SocialItem from "./SocialItem";

const SocialCard = () => {
  const socialMeta = [
    {
      icon: "Github",
      link: "https://github.com/shubhamsalunkhe16",
    },
    {
      icon: "Whatsapp",
      link: "https://wa.me/+919004409190",
    },
    {
      icon: "Instagram",
      link: "https://github.com/shubhamsalunkhe16",
    },
    {
      icon: "Linkedin",
      link: "https://www.linkedin.com/in/shubham-b-salunkhe",
    },
  ];

  return (
    <>
      <section className="flex gap-2 items-center">
        {socialMeta.map((data) => (
          <SocialItem {...data} key={data?.icon} />
        ))}
      </section>
    </>
  );
};

export default SocialCard;
