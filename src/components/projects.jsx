import ecommerce from "../assets/images/ecommerce.png";
import jsImg from "../assets/images/javascript.png";
import htmlImg from "../assets/images/html.png";
import csslImg from "../assets/images/css.png";
import reactImg from "../assets/images/react.png";
import tailwindImg from "../assets/images/tailwind.png";
import viteImg from "../assets/images/vite.png";

const projects = [
  {
    name: "E-commerce",
    img: ecommerce,
    description: "Um dos primeiros projetos que fiz, ainda está em andamento",
    tecnologias: [jsImg, htmlImg, csslImg, viteImg, reactImg, tailwindImg],
  },
  {
    name: "E-commerce",
    img: ecommerce,
    description: "Um dos primeiros projetos que fiz, ainda está em andamento",
    tecnologias: [jsImg, htmlImg],
  },
  {
    name: "E-commerce",
    img: ecommerce,
    description: "Um dos primeiros projetos que fiz, ainda está em andamento",
    tecnologias: [jsImg, htmlImg],
  },
];

function Projects() {
  return (
    <div className="w-full place-items-center flex flex-col justify-center">
      <div className="text-center justify-center mb-8 font-bold text-2xl">
        <h1>Projetos</h1>
      </div>
      <div className="w-3/4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-600 rounded-lg shadow-md hover:shadow-blue-300 transition-all hover:cursor-pointer"
          >
            <div className="rounded-t-lg overflow-hidden ">
              <img
                src={project.img}
                alt={project.name}
                className="w-96 hover:scale-110 transition"
              />
            </div>
            <div className="mt-2 p-2">
              <span className=" text-md font-semibold">{project.name}</span>
            </div>
            <div className="p-2 flex flex-col">
              <span className="text-sm">{project.description}</span>
            </div>
            <div className="grid grid-cols-4 p-2 sm:grid-cols-6 space-x-2 mt-2">
              {project.tecnologias.map((tec, i) => (
                <img
                  key={i}
                  src={tec}
                  alt="Tecnologia"
                  className="w-8 h-8 p-1 hover:scale-105 drop-shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
