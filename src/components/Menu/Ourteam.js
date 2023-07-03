import { useNavigate } from "react-router-dom";
import aru from "./img/profil/foto-aru.jpeg";
import wisnu from "./img/profil/inu.jpg";

const OurTeam = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px">
        <h1 className="text-center font-bold text-2xl mt-5">Our Team</h1>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-1" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://hy-grou.github.io/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-2" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-3" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-4" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-5" src={wisnu} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Wisnu Hartono</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/wsnuhrtno_._/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-6" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-7" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-8" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg shadow-xl text-text ">
            <img alt="profil-9" src={aru} className="w-[150px] h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/aruchvy_/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-text m-20">
          <button onClick={() => navigate("/")} className="bg-bg px-4 py-2 mt-9 rounded-md hover:text-white ">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};
export default OurTeam;
