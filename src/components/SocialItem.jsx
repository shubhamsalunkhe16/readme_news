import React from "react";
// import { icons } from "lucide-react";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsapp.svg";

const icons = {
  Github,
  Instagram,
  Linkedin,
  Whatsapp,
};

const SocialItem = ({ icon, link }) => {
  console.log("icon", icon, icons);
  const Icon = icons[icon];
  return (
    <a href={link} target="_blank">
      {/* <img
        src={require(`../assets/icons/${icon}.svg`)}
        alt={icon}
        className="w-6 hover:scale-110 transition duration-250 invert aspect-square"
        loading="lazy"
      /> */}
      {/* <LucideIcon className="w-6 hover:scale-110 transition duration-250 text-text-primary aspect-square" /> */}
      <Icon className="w-6 hover:scale-110 transition duration-250 fill-text-primary aspect-square" />
    </a>
  );
};

export default SocialItem;
