import Family from "./img/section2/family.png"
import Graduation from "./img/section2/graduation.png"
import Group from "./img/section2/group.png"
import Wedding from "./img/section2/wedding.png"
import Pet from "./img/section2/pet.png"
import Etc from "./img/section2/etc.png"

function Section2() {
  return (
    <div class="text-center text-text bg-[#E3F4F4] pb-40">
      <h1 className="text-xl py-10">Mau Foto Apa?</h1>
      <div className="flex justify-center">

        <div className="border-[5px] border-white m-3 rounded-xl">
          <div className="border-green-600 border-4 bg-white rounded-xl hover:bg-bg">
            <img className="h-[90px] px-5 pt-3" src={Family} />
            <h1 className="pb-3 font-bold pt-1 font-mono text-slate-950 hover:text-text">Family</h1>
          </div>
        </div>

        <div className="border-[5px] border-white m-3 rounded-xl">
          <div className="border-green-600 border-4 bg-white rounded-xl hover:bg-bg">
            <img className="h-[90px] px-5 pt-3" src={Graduation} />
            <h1 className="pb-3 font-bold pt-1 font-mono text-slate-950 hover:text-text">Graduation</h1>
          </div>
        </div>

        <div className="border-[5px] border-white m-3 rounded-xl">
          <div className="border-green-600 border-4 bg-white rounded-xl hover:bg-bg">
            <img className="h-[90px] px-5 pt-3" src={Group} />
            <h1 className="pb-3 font-bold pt-1 font-mono text-slate-950 hover:text-text">Group</h1>
          </div>
        </div>
        
      </div>

      <div className="flex justify-center">

        <div className="border-[5px] border-white m-3 rounded-xl">
          <div className="border-green-600 border-4 bg-white rounded-xl hover:bg-bg">
            <img className="h-[90px] px-5 pt-3" src={Wedding} />
            <h1 className="pb-3 font-bold pt-1 font-mono text-slate-950 hover:text-text">Wedding</h1>
          </div>
        </div>

        <div className="border-[5px] border-white m-3 rounded-xl">
          <div className="border-green-600 border-4 bg-white rounded-xl hover:bg-bg">
            <img className="h-[90px] px-5 pt-3" src={Pet} />
            <h1 className="pb-3 font-bold pt-1 font-mono text-slate-950 hover:text-text">Pet</h1>
          </div>
        </div>

        <div className="border-[5px] border-white m-3 rounded-xl">
          <div className="border-green-600 border-4 bg-white rounded-xl hover:bg-bg">
            <img className="h-[90px] px-5 pt-3" src={Etc} />
            <h1 className="pb-3 font-bold pt-1 font-mono text-slate-950 hover:text-text">Etc</h1>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Section2;
