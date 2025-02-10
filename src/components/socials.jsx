import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import email from "../assets/images/email.png";

const socials = [
  { name: "GitHub", image: github },
  { name: "LinkedIn", image: linkedin },
  { name: "Email", image: email },
];
function Socials() {
  return (
    <div className="flex justify-center items-center gap-2 m-2">
      {socials.map((social, index) => (
        <div key={index} className="w-8 h-8 place-items-center">
          <img
            src={social.image}
            alt={social.name}
            className="hover:scale-110 transition duration-300 drop-shadow-blue hover:cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default Socials;
