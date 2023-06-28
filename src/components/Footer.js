import { useNavigate } from "react-router-dom";
import DXlogo2 from "./img/logo/Logo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px justify-between bg-[#ABC4AA] text-white sm:py-14">
        <div className="hidden 2xl:flex justify center">
          <div className="my-9 ml-20 lg:mr-52">
            <a href="https://difhaels.github.io/determinix " target={"_blank"} rel="noreferrer">
              <img className="sm:pt-10" src={DXlogo2} width="120" alt="dx" />
            </a>
          </div>
          <div className="block mr-32">
            <h1 className="font-bold text-text">TOOLS</h1>
            <a className="block hover:text-text" href="https://id.wikipedia.org/wiki/HTML" target={"_blank"} rel="noreferrer">
              HTML
            </a>
            <a className="block hover:text-text" href="https://en.wikipedia.org/wiki/CSS" target={"_blank"} rel="noreferrer">
              CSS
            </a>
            <a className="block hover:text-text" href="https://www.javascript.com/" target={"_blank"} rel="noreferrer">
              JavaScript
            </a>
            <a className="block hover:text-text" href="https://tailwindcss.com/" target={"_blank"} rel="noreferrer">
              TailwindCSS
            </a>
            <a className="block hover:text-text" href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
              ReactJS
            </a>
            <h1 className="font-bold text-text pt-2">RELATED</h1>
            <a className="block hover:text-text" href="https://www.unas.ac.id/" target={"_blank"} rel="noreferrer">
              Universitas Nasional
            </a>
            <a className="block hover:text-text" href="https://campus.quipper.com/majors/id-sistem-informasi" target={"_blank"} rel="noreferrer">
              Sistem Informasi
            </a>
            <a className="block hover:text-text" href="https://id.wikipedia.org/wiki/Teknologi_informasi" target={"_blank"} rel="noreferrer">
              Teknologi
            </a>
          </div>
          <div className="block mr-32">
            <h1 className="font-bold  text-text">GITHUB</h1>
            <a className="block hover:text-text" href="https://github.com/difhaels" target={"_blank"} rel="noreferrer">
              Difhaels
            </a>
            <a className="block hover:text-text" href="https://github.com/hy-grou" target={"_blank"} rel="noreferrer">
              hy-grouu
            </a>
            <a className="block hover:text-text" href="https://github.com/Wsnuhrtno" target={"_blank"} rel="noreferrer">
              Wsnuhrtno
            </a>
            <a className="block hover:text-text" href="https://github.com/YuraraYura" target={"_blank"} rel="noreferrer">
              YuraraYura
            </a>
            <a className="block hover:text-text" href="https://github.com/SvX555" target={"_blank"} rel="noreferrer">
              SvX555
            </a>
            <a className="block hover:text-text" href="https://github.com/Adhanzo" target={"_blank"} rel="noreferrer">
              Adhanzo
            </a>
            <a className="block hover:text-text" href="https://github.com/dRainShades" target={"_blank"} rel="noreferrer">
              dRainShades
            </a>
            <a className="block hover:text-text" href="https://github.com/Aligatorrok" target={"_blank"} rel="noreferrer">
              Aligatorrok
            </a>
            <a className="block hover:text-text" href="https://github.com/DarkZone07" target={"_blank"} rel="noreferrer">
              DarkZone07
            </a>
          </div>
          <div className="block">
            <h1 className="font-bold text-text">PORTFOLIO</h1>
            <a className="block hover:text-text" href="https://difhaels.github.io/" target={"_blank"} rel="noreferrer">
              Agung Saputra
            </a>
            <a className="block hover:text-text" href="https://hy-grou.github.io/" target={"_blank"} rel="noreferrer">
              Aru Chevy
            </a>
            <a className="block hover:text-text" href="https://Wsnuhrtno.github.io/" target={"_blank"} rel="noreferrer">
              Wisnu Hartono
            </a>
            <a className="block hover:text-text" href="https://yurarayura.github.io/" target={"_blank"} rel="noreferrer">
              Albi Fahri
            </a>
            <a className="block hover:text-text" href="https://SvX555.github.io/" target={"_blank"} rel="noreferrer">
              Krisna Setyo
            </a>
            <a className="block hover:text-text" href="https://dRainShades.github.io/" target={"_blank"} rel="noreferrer">
              Dian Rivanno
            </a>
            <a className="block hover:text-text" href="https://Aligatorrok.github.io/" target={"_blank"} rel="noreferrer">
              Beni Maryana
            </a>
            <a className="block hover:text-text" href="https://Adhanzo.github.io/" target={"_blank"} rel="noreferrer">
              Adhan
            </a>
            <a className="block hover:text-text" href="https://DarkZone07.github.io/" target={"_blank"} rel="noreferrer">
              Tubagus
            </a>


          </div>
        </div>

        <div className="mx-auto my-5 w-[90%] h-[0.5px] bg-white hidden 2xl:block"></div>

        <div className="flex justify-center">
            <button className="mt-10 2xl:mt-6 px-6 py-4 rounded-lg justify-center font-bold text-xl bg-text text-bg hover:text-white " onClick={() => navigate("/our-team")}>
              Our Team
            </button>
        </div>

        <div className="flex justify-center pt-10 pb-10 text-text">
          <h1>Created by Determinix 2023</h1>
        </div>
      </div>
    </>
  );
}
