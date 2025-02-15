import { Link } from "react-scroll";
import home from "../assets/images/home.png";
import profile from "../assets/images/profile.png";
import skills from "../assets/images/skills.png";
import projects from "../assets/images/projects.png";
import contato from "../assets/images/contact.png";
import brazil from "../assets/images/brazil.png";
import usa from "../assets/images/usa.png";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="flex backdrop-blur-sm  bottom-0 lg:bottom-auto bg-slate-950/60 justify-center items-center lg:justify-between pl-16 pr-16 shadow-md w-full fixed z-10">
        <div className=" place-content-center hidden lg:flex">
          <h2 className="font-bold">VM</h2>
        </div>
        <div className="w-max">
          <ul className="w-max lg:gap-16 lg:m-4 lg:text-md font-bold flex gap-8 m-1 text-sm justify-center ">
            <li>
              <div className="relative cursor-pointer group flex flex-col items-center">
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  className="group-hover:opacity-50 transition"
                >
                  <img src={home} alt="home" className="w-6 h-6" />
                </Link>
                <span
                  className="pointer-events-none cursor-default absolute lg:top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100  group-hover:translate-x-0 opacity-0 transition-all"
                >
                  Home
                </span>
              </div>
            </li>

            <li>
              <div className="relative cursor-pointer group flex flex-col items-center">
                <Link
                  to="profile"
                  smooth={true}
                  duration={500}
                  className="group-hover:opacity-50 transition"
                >
                  <img src={profile} alt="profile" className="w-6 h-6" />
                </Link>
                <span
                  className="pointer-events-none cursor-default absolute w-max lg:top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100  group-hover:translate-x-0 opacity-0 transition-all"
                >
                  Sobre mim
                </span>
              </div>
            </li>

            <li>
              <div className="relative cursor-pointer group flex flex-col items-center">
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="group-hover:opacity-50 transition"
                >
                  <img src={skills} alt="skills" className="w-6 h-6" />
                </Link>
                <span
                  className="pointer-events-none cursor-default absolute lg:top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100  group-hover:translate-x-0 opacity-0 transition-all"
                >
                  Skills
                </span>
              </div>
            </li>

            <li>
              <div className="relative cursor-pointer group flex flex-col items-center">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="group-hover:opacity-50 transition"
                >
                  <img src={projects} alt="projetos" className="w-6 h-6" />
                </Link>
                <span
                  className="pointer-events-none cursor-default absolute lg:top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100  group-hover:translate-x-0 opacity-0 transition-all"
                >
                  Projetos
                </span>
              </div>
            </li>

            <li>
              <div className="relative cursor-pointer group flex flex-col items-center">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="group-hover:opacity-50 transition"
                >
                  <img src={contato} alt="contato" className="w-6 h-6" />
                </Link>
                <span
                  className="pointer-events-none cursor-default absolute lg:top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100  group-hover:translate-x-0 opacity-0 transition-all"
                >
                  Contato
                </span>
              </div>
            </li>

            <li>
              <div className="relative cursor-pointer group flex flex-col items-center">
                <div className="group-hover:opacity-50 transition">
                  <img
                    src={i18n.language === "pt" ? brazil : usa}
                    alt="contato"
                    className="w-6 h-6"
                    onClick={() =>
                      i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt")
                    }
                  />
                </div>
                <span
                  className="pointer-events-none cursor-default absolute lg:top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100  group-hover:translate-x-0 opacity-0 transition-all"
                >
                  {i18n.language === "pt" ? "English" : "Português"}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
