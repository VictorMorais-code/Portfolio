import jsImg from "../assets/images/javascript.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import bootstrapImg from "../assets/images/bootstrap.png";
import reactImg from "../assets/images/react.png";
import tailwindImg from "../assets/images/tailwind.png";
import viteImg from "../assets/images/vite.png";
import gitImg from "../assets/images/git.png";

const skills = [
  { name: "JavaScript", image: jsImg },
  { name: "HTML", image: htmlImg },
  { name: "CSS", image: cssImg },
  { name: "Bootstrap", image: bootstrapImg },
  { name: "React", image: reactImg },
  { name: "Tailwind", image: tailwindImg },
  { name: "Vite", image: viteImg },
  { name: "Git", image: gitImg },
];

export default function Carousel() {
  return (
    <div className="overflow-hidden my-15 sm:my-20 py-4">
      <div className="flex w-max animate-slide">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="w-10 h-10  mx-15 place-items-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="hover:opacity-80 opacity-30 transition duration-300"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
