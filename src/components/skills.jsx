import React from "react";
import jsImg from "../assets/images/javascript.png";
import htmlImg from "../assets/images/html.png";
import csslImg from "../assets/images/css.png";
import bootstrapImg from "../assets/images/bootstrap.png";
import reactImg from "../assets/images/react.png";
import tailwindImg from "../assets/images/tailwind.png";
import viteImg from "../assets/images/vite.png";
import gitImg from "../assets/images/git.png";

const skills = [
  { name: "JavaScript", image: jsImg },
  { name: "HTML", image: htmlImg },
  { name: "CSS", image: csslImg },
  { name: "Bootstrap", image: bootstrapImg },
  { name: "React", image: reactImg },
  { name: "Tailwind", image: tailwindImg },
  { name: "Vite", image: viteImg },
  { name: "Git", image: gitImg },
];

function SkillsGrade() {
  return (
    <div className="w-full place-items-center">
      <div className="text-center mb-8 justify-center font-bold text-2xl">
        <h1>Skills</h1>
      </div>
      <div className="w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 h-96 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4  flex flex-col items-center sm:w-24 sm:h-24 w-18 h-18 hover:scale-105 transition"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-30 h-30 drop-shadow-sm"
            />
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsGrade;
