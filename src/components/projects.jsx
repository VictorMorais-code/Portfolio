import ecommerce from "../assets/images/ecommerce.png";
import jsImg from "../assets/images/javascript.png";
import htmlImg from "../assets/images/html.png";
import csslImg from "../assets/images/css.png";
import reactImg from "../assets/images/react.png";
import tailwindImg from "../assets/images/tailwind.png";
import viteImg from "../assets/images/vite.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: t("translation.projects.project-1.title"),
      img: ecommerce,
      description: t("translation.projects.project-1.description"),
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
      description:
        "Um dos primeiros projetos que fiz, ainda está em andamento, lorem ipsum dolor sit amet",
      tecnologias: [jsImg, htmlImg],
    },
  ];

  return (
    <div className=" w-full place-items-center flex flex-col justify-center">
      <div className="text-center justify-center mb-8 font-bold text-2xl">
        <h1>{t("translation.projects.title")}</h1>
      </div>
      <div className="w-3/4   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" min-h-96 bg-transparent shadow-md shadow-blue-300 text-slate-200
            rounded-lg hover:shadow-xl hover:shadow-blue-400
            w-full transition-all hover:scale-105"
          >
            <div className="hover:cursor-pointer  relative group rounded-t-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-max hover:scale-110 transition  hover:blur-sm"
              />

              <span
                className="font-bold text-white opacity-0 group-hover:opacity-100 transition-all
              duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-2xl border-2 p-2"
              >
                Abrir
              </span>
            </div>
            <div className="flex flex-col justify-between h-60">
              <div className=" mt-2 p-2">
                <span className=" text-md font-semibold">{project.name}</span>
              </div>
              <div className="p-2 flex flex-col text-wrap overflow-hidden break-words">
                <span className="text-sm ">{project.description}</span>
              </div>
              <div className="grid  grid-cols-4 w-full p-2 sm:grid-cols-6 space-x-2 mt-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
