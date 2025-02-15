import profile from "../assets/images/profile.jpg";
import Socials from "../components/socials";
import { useState } from "react";
import { Translation, useTranslation } from "react-i18next";

function Profile() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  function handleMouseMove(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setRotateX(y * -5); // Inclinação no eixo X
    setRotateY(x * 5); // Inclinação no eixo Y
    setMouseX((x + 0.5) * 100); // Coordenada X do brilho (0-100%)
    setMouseY((y + 0.5) * 100); // Coordenada Y do brilho (0-100%)
  }

  function resetRotation() {
    setRotateX(0);
    setRotateY(0);
    setMouseX(50);
    setMouseY(50);
  }

  const { t } = useTranslation();

  return (
    <div className="place-items-centerw-full flex justify-center">
      <div
        className="relative sm:w-3/4 w-full m-2 sm:m-8 backdrop-blur-2xl bg-slate-500/20 p-4 rounded-2xl flex flex-col md:flex-row shadow-md shadow-gray-200 transition-transform duration-200"
        style={{
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        {/* Brilho animado */}
        <div
          className="absolute inset-0 rounded-2xl opacity-50 blur-lg transition-all duration-200"
          style={{
            background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.2), transparent 50%)`,
          }}
        ></div>

        <div className="flex flex-col gap-1 justify-center items-center z-10">
          <div className="w-40 h-40 sm:w-60 sm:h-60 m-2 p-2 overflow-hidden">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover rounded-4xl border-slate-200 shadow-md hover:shadow-slate-200 transition duration-500 ease"
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
          <p>{t("translation.about-me.content")}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
