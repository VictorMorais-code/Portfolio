import profile from "../assets/images/profile.jpg";
import Socials from "../components/socials";
import { useState } from "react";

function Profile() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setRotateX(y * -2); // Inclinação no eixo X
    setRotateY(x * 2); // Inclinação no eixo Y
  }

  function resetRotation() {
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <div className="place-items-center w-full flex justify-center">
      <div
        className="sm:w-3/4 w-full m-2 sm:m-8 bg-white/5 backdrop-blur-md p-4 rounded-2xl flex flex-col
        md:flex-row shadow-sm shadow-gray-200 transition-transform duration-200"
        style={{
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 m-2 p-2 overflow-hidden">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover rounded-4xl border-slate-200 shadow-md hover:shadow-slate-200
              transition duration-500 ease"
            />
          </div>
          <div className="font-bold">
            <h2>
              <em>VICTOR MORAIS</em>
            </h2>
          </div>
          <div className="w-full">
            <Socials />
          </div>
        </div>
        <div className="col-span-2 p-2 pt-5 text-sm sm:text-lg text-justify">
          <p>
            Sou um desenvolvedor frontend apaixonado por criar interfaces
            modernas e responsivas. Sou formado em Análise e Desenvolvimento de
            Sistemas e busco sempre aprimorar minhas habilidades, explorando
            novas tecnologias e boas práticas de desenvolvimento. Tenho
            experiência com JavaScript, HTML, CSS, React, Tailwind, entre outras
            tecnologias. No momento estou estudando SQL e Node.js. Meu foco é
            proporcionar a melhor experiência ao usuário por meio de designs bem
            estruturados e código limpo. Estou sempre aberto a novos desafios e
            oportunidades para crescer como desenvolvedor!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
