import { useNavigate } from "react-router-dom";

import pet1 from "./img/pet1.jpg";
import pet2 from "./img/pet2.jpg";
import pet3 from "./img/pet3.jpg";
import pet4 from "./img/pet4.jpg";

const Pet = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username");
  return (
    <>
      <div className="px py-10 bg-slate-100">
        <h1 className="font-bold text-2xl text-center pb-10">Pet</h1>
        <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
          <img src={pet1} alt="img-gallery" className="h-[390px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={pet2} alt="img-gallery" className="h-[390px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={pet3} alt="img-gallery" className="h-[390px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={pet4} alt="img-gallery" className="h-[390px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center py-10">Paket penjualan</h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">

          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
            <div className="bg-slate-400  rounded-t-xl py-6 px-36 text-white ">
              <h1 className="font-bold text-2xl mb-2">Pet</h1>
              <p>Paket Reguler</p>
            </div>
            <div className="  rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">139</span>.000
              </h1>
              <p className="mt-4">30 Menit Pemrotetan</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Unlimitied photoshoot</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Maks. 1 Hewan (Charge 20.000/hewan)</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4 pb-10">All file copy ke HP/Google Drive</p>
            </div>
            <a href="https://www.youtube.com/" target="_blank">
              <button className="px-5 py-2 bg-bg rounded-md mb-5 text-text hover:text-white" >Book Now!!</button>
            </a>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>

          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
            <div className="bg-slate-400  rounded-t-xl py-6 px-36 text-white ">
              <h1 className="font-bold text-2xl mb-2">Pet</h1>
              <p>Paket Eksklusif</p>
            </div>
            <div className="rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">199</span>.000
              </h1>
              <p className="mt-4">50 Menit Pemrotetan</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Unlimitied photoshoot</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Maks. 3 Hewan (Charge 20.000/hewan)</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4 pb-10">All file copy ke HP/Google Drive</p>
            </div>
            <a href="https://www.youtube.com/" target="_blank">
              <button className="px-5 py-2 bg-bg rounded-md mb-5 text-text hover:text-white" >Book Now!!</button>
            </a>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>
          
          {storedUsername !== "undefined" || undefined? 
            <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
              <div className="bg-orange-500  rounded-t-xl py-6 px-36 text-white ">
                <h1 className="font-bold text-2xl mb-2">Pet</h1>
                <p>Paket Khusus Member</p>
              </div>
              <div className="rounded-b-lg">
                <h1 className="pt-3">
                  Rp.<span className="text-4xl">139</span>.000
                </h1>
                <p className="mt-4">50 Menit Pemrotetan</p>
                <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
                <p className="mt-4">Unlimitied photoshoot</p>
                <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
                <p className="mt-4">Maks. 3 Hewan (Charge 20.000/hewan)</p>
                <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
                <p className="mt-4 pb-10">All file copy ke HP/Google Drive</p>
              </div>
              <a href="https://fitgirl-repacks.to/" target="_blank">
                <button className="px-5 py-2 bg-bg rounded-md mb-5 text-text hover:text-white" >Book Now!!</button>
              </a>
              <p className="pb-5 text-text">Make ur Different Moment</p>
            </div>:
            <div></div>  
        }
          

        </div>

        <div className="flex justify-center">
          <button onClick={() => navigate("/")} className="bg-bg px-4 py-2 mt-10 rounded-md text-text hover:text-white">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};
export default Pet;
