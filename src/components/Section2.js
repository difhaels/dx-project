import Family from "./img/section2/family.png"
import Graduation from "./img/section2/graduation.png"
import Group from "./img/section2/group.png"
import Wedding from "./img/section2/wedding.png"
import Pet from "./img/section2/pet.png"
import Etc from "./img/section2/etc.png"
import { useNavigate } from "react-router-dom"

function Section2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E3F4F4" fillOpacity="1" d="M0,128L26.7,128C53.3,128,107,128,160,144C213.3,160,267,192,320,208C373.3,224,427,224,480,197.3C533.3,171,587,117,640,101.3C693.3,85,747,107,800,144C853.3,181,907,235,960,250.7C1013.3,267,1067,245,1120,208C1173.3,171,1227,117,1280,85.3C1333.3,53,1387,43,1413,37.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <div className="px text-center text-text bg-[#E3F4F4] pb-10 sm:pb-40">
        <h1 className="text-xl py-10">Mau Foto Apa?</h1>
        <div className="flex justify-center">

          <div className="border-[3px] sm:border-[5px] border-white m-3 rounded-xl group hover:border-[#E3F4F4]" onClick={() => navigate('family')}>
            <div className="border-green-600 border-[2px] sm:border-4 bg-white rounded-xl group-hover:bg-bg">
              <img className="h-[50px] sm:h-[90px] px-5 pt-3" src={Family} alt="family"/>
              <h1 className="pb-3 text-[10px] sm:text-lg font-bold pt-1 font-mono text-slate-950 group-hover:text-text">Family</h1>
            </div>
          </div>

          <div className="border-[3px] sm:border-[5px] border-white m-3 rounded-xl group hover:border-[#E3F4F4]" onClick={() => navigate('graduation')}>
            <div className="border-green-600 border-[2px] sm:border-4 bg-white rounded-xl group-hover:bg-bg">
              <img className="h-[50px] sm:h-[90px] px-5 pt-3" src={Graduation} alt="graduation"/>
              <h1 className="pb-3 text-[10px] sm:text-lg font-bold pt-1 font-mono text-slate-950 group-hover:text-text">Graduation</h1>
            </div>
          </div>

          <div className="border-[3px] sm:border-[5px] border-white m-3 rounded-xl group hover:border-[#E3F4F4]" onClick={() => navigate('group')}>
            <div className="border-green-600 border-[2px] sm:border-4 bg-white rounded-xl group-hover:bg-bg">
              <img className="h-[50px] sm:h-[90px] px-5 pt-3" src={Group} alt="group"/>
              <h1 className="pb-3 text-[10px] sm:text-lg font-bold pt-1 font-mono text-slate-950 group-hover:text-text">Group</h1>
            </div>
          </div>
          
        </div>

        <div className="flex justify-center">

          <div className="border-[3px] sm:border-[5px] border-white m-3 rounded-xl group hover:border-[#E3F4F4]" onClick={() => navigate('wedding')}>
            <div className="border-green-600 border-[2px] sm:border-4 bg-white rounded-xl group-hover:bg-bg">
              <img className="h-[50px] sm:h-[90px] px-5 pt-3" src={Wedding} alt="wedding"/>
              <h1 className="pb-3 text-[10px] sm:text-lg font-bold pt-1 font-mono text-slate-950 group-hover:text-text">Wedding</h1>
            </div>
          </div>

          <div className="border-[3px] sm:border-[5px] border-white m-3 rounded-xl group hover:border-[#E3F4F4]" onClick={() => navigate('pet')}>
            <div className="border-green-600 border-[2px] sm:border-4 bg-white rounded-xl group-hover:bg-bg">
              <img className="h-[50px] sm:h-[90px] px-5 pt-3" src={Pet} alt="pet" />
              <h1 className="pb-3 text-[10px] sm:text-lg font-bold pt-1 font-mono text-slate-950 group-hover:text-text">Pet</h1>
            </div>
          </div>

          <div className="border-[3px] sm:border-[5px] border-white m-3 rounded-xl group hover:border-[#E3F4F4]" onClick={() => navigate('etc')}>
            <div className="border-green-600 border-[2px] sm:border-4 bg-white rounded-xl group-hover:bg-bg">
              <img className="h-[50px] sm:h-[90px] px-5 pt-3" src={Etc} alt="etc"/>
              <h1 className="pb-3 text-[10px] sm:text-lg font-bold pt-1 font-mono text-slate-950 group-hover:text-text">Etc</h1>
            </div>
          </div>

        </div>
      </div>
    </>
  );

}
export default Section2;

