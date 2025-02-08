import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <div className="bg-slate-900 flex justify-center shadow-md">
        <div className="w-1/2 place-content-center">
          <h2 className="font-bold">VM</h2>
        </div>
        <ul className="md:flex gap-4 m-4 text-md font-bold hidden">
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
              to="experiences"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Experiências
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
