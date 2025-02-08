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

function Carousel() {
  return (
    <div id="carousel" className="carousel slide w-full flex overflow-hidden">
      <div className="carousel-inner flex flex-row w-full gap-8 content-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-10 h-10 sm:w-20 sm:h-20 p-2 items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="hover:opacity-100 opacity-5 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
