import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <div className="lg:flex hidden bg-slate-900 justify-center shadow-md w-full fixed z-10">
        <div className="w-1/2 place-content-center">
          <h2 className="font-bold">VM</h2>
        </div>
        <ul className="gap-4 m-4 text-md font-bold flex ">
          <li>
            <Link
              to="header"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
