import { Link } from "react-scroll";
import home from "../assets/images/home.png";
import profile from "../assets/images/profile.png";
import skills from "../assets/images/skills.png";
import projects from "../assets/images/projects.png";
import contato from "../assets/images/contact.png";

function Navbar() {
  return (
    <div>
      <div className="lg:flex hidden backdrop-blur-sm  bg-slate-950/60 justify-between pl-16 pr-16 shadow-md w-full fixed z-10">
        <div className="w-1/2 place-content-center">
          <h2 className="font-bold ml-10">VM</h2>
        </div>
        <ul className="gap-16 m-4 text-md font-bold flex ">
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
                className="pointer-events-none cursor-default absolute top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100 group-hover:translate-x-0 opacity-0 transition-all"
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
                className="pointer-events-none cursor-default absolute w-max top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100 group-hover:translate-x-0 opacity-0 transition-all"
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
                className="pointer-events-none cursor-default absolute top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100 group-hover:translate-x-0 opacity-0 transition-all"
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
                className="pointer-events-none cursor-default absolute top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100 group-hover:translate-x-0 opacity-0 transition-all"
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
                className="pointer-events-none cursor-default absolute top-12 shadow-md p-1 -translate-x-30 text-xs text-slate-900
                rounded-md bg-slate-100 group-hover:opacity-100 group-hover:translate-x-0 opacity-0 transition-all"
              >
                Contato
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
