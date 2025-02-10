import Lottie from "lottie-react";
import Navbar from "./components/navbar";
import { TypeAnimation } from "react-type-animation";
import AnimationHeader from "./components/animationHeader";
import profile from "./assets/images/profile.jpg";
import SkillsGrade from "./components/skills";
import Projects from "./components/projects";
import AnimationArrow from "./assets/animations/Animation-arrow.json";
import AnimarionReact from "./assets/animations/Animation-react.json";
import Carousel from "./components/carousel";
import FormContact from "./components/form";
import Socials from "./components/socials";

function App() {
  return (
    <div className="bg-slate-950 h-max text-slate-300">
      <header>
        <Navbar />
      </header>

      <section id="header" className="relative min-h-screen pt-20">
        <div className="">
          <div className="absolute w-15 sm:w-20 md:top-20 top-10 left-5 opacity-30">
            <Lottie animationData={AnimarionReact} loop={true} />
          </div>
        </div>
        <div className="flex-col flex sm:flex-row p-4 justify-center items-center">
          <div className=" md:w-110 w-60">
            <h2 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-700 to-emerald-400  md:text-4xl font-extrabold">
              Olá, meu nome é Victor!
            </h2>
            <div className="h-16">
              <TypeAnimation
                className="md:text-2xl text-xs text-gray-300"
                sequence={[
                  "Desenvolvedor Frontend",
                  2000,
                  "JavaScript, React.js e muito mais",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <button className=" bg-gradient-to-tr from-purple-950 to-emerald-500 rounded-lg p-2 text-xs font-bold">
              Download CV
            </button>
          </div>
          <div className="w-60">
            <AnimationHeader />
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
        <div className="w-full place-items-center absolute bottom-4  overflow-hidden">
          <div className="w-10 rotate-90 m-2 p-2">
            <Lottie animationData={AnimationArrow} loop={true} />
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="place-items-center m-4 p-2 flex flex-col"
      >
        <div className="text-center  font-bold text-2xl">
          <h1>Sobre mim</h1>
        </div>
        <div className="place-items-center w-full ">
          <div className="sm:w-3/4 w-full m-10 sm:m-8 bg-slate-700 p-4 rounded-2xl flex flex-col  md:flex-row shadow-md shadow-gray-200 ">
            <div className="flex flex-col justify-center items-center">
              <div className="w-40 h-40 sm:w-60 sm:h-60 m-2 p-2  overflow-hidden">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full  object-cover rounded-4xl border-slate-200 shadow-md hover:shadow-slate-200 transition duration-500 ease"
                />
              </div>
              <div className="font-bold">
                <h2>
                  <em>VICTOR MORAIS</em>
                </h2>
              </div>
              <div>
                <Socials />
              </div>
            </div>
            <div className="col-span-2 p-2 pt-5 text-sm sm:text-lg text-justify  text-wrap">
              <p>
                Sou um desenvolvedor frontend apaixonado por criar interfaces
                modernas e responsivas. Sou formado em Análise e Desenvolvimento
                de Sistemas e busco sempre aprimorar minhas habilidades,
                explorando novas tecnologias e boas práticas de desenvolvimento.
                Tenho experiência com JavaScript, HTML, CSS, React, Tailwind,
                entre outras tecnologias, no momento estou estudando sobre SQL e
                Node.js. Meu foco é proporcionar a melhor experiência ao usuário
                por meio de designs bem estruturados e código limpo. Estou
                sempre aberto a novos desafios e oportunidades para crescer como
                desenvolvedor!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="place-items-center m-4 p-2 flex flex-col">
        <div className="w-full place-items-center justify-center">
          <SkillsGrade />
        </div>
      </section>

      <section
        id="projects"
        className="place-items-center m-4 p-2 flex flex-col"
      >
        <Projects />
      </section>

      <footer>
        <section id="contact" className="bg-slate-800 p-4">
          <FormContact />
        </section>
      </footer>
    </div>
  );
}

export default App;
