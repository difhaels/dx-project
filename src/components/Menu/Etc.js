import { useNavigate } from "react-router-dom";

import etc1 from "./img/etc1.jpg";
import etc2 from "./img/etc2.jpg";
import etc3 from "./img/etc3.jpg";
import etc4 from "./img/etc4.jpg";



const Etc = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px py-10 bg-slate-100">
        <h1 className="font-bold text-2xl text-center pb-10">ETC</h1>
        <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
          <img src={etc1} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={etc2} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={etc3} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={etc4} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" /> 
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center py-10">Paket penjualan</h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center  ">
          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
            <div className="bg-slate-400  rounded-t-xl py-6 px-44 text-white ">
              <h1 className="font-bold text-2xl mb-2">Foto Bebas</h1>
              <p>Paket Reguler</p>
            </div>
            <div className="bg-[#F9F5F6]  rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">249</span>.000
              </h1>
              <p className="mt-4">1 Fotografer</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">35 Menit Pemrotetan</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Unlimitied photoshoot</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Maks. 3 orang/item (Charge 25.000/orang atau item)</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4 ">1 Background </p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4 pb-10">All file copy ke HP/Google Drive </p>
            </div>
            <button className="px-5 py-2 bg-bg rounded-md mb-5 text-text hover:text-white">Book Now!!</button>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>
          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
            <div className="bg-slate-400  rounded-t-xl py-6 px-36 text-white ">
              <h1 className="font-bold text-2xl mb-2">Foto Bebas</h1>
              <p>Paket Eksklusif</p>
            </div>
            <div className="bg-[#F9F5F6]  rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">349</span>.000
              </h1>
              <p className="mt-4">1 Fotografer dan Asisten</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">50 Menit Pemrotetan</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Unlimitied photoshoot</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4">Maks. 7 orang/item (Charge 25.000/orang atau item)</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4 ">2 Background</p>
              <div className="bg-slate-400 mt-3 py-[1px] w-[80%] mx-auto "></div>
              <p className="mt-4 pb-10">All file copy ke HP/Google Drive</p>
            </div>
            <button className="px-5 py-2 bg-bg rounded-md mb-5 text-text hover:text-white">Book Now!!</button>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>
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
export default Etc;
