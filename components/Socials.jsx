import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaHand } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/SameerMalek"
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mohammad-sameer-malek-032866222/"
  }
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link target="_blank" key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
