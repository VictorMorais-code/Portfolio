import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import email from "../assets/images/email.png";
import languages from "../assets/images/language.png";
import { useTranslation } from "react-i18next";

const socials = [
  { name: "GitHub", image: github },
  { name: "LinkedIn", image: linkedin },
  { name: "Email", image: email },
];
function Socials() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <div key={index} className="w-8 h-8 place-items-center mt-2">
            <img
              src={social.image}
              alt={social.name}
              className="hover:scale-110 transition duration-300 drop-shadow-blue hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2  items-center w-full text-sm">
        <img
          src={languages}
          alt="languages"
          className="w-6 h-6 m-2 drop-shadow-blue hover:scale-110 transition duration-300"
        />
        <p>{t("translation.about-me.languages")}</p>
      </div>
    </div>
  );
}

export default Socials;
