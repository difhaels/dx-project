import { useNavigate } from "react-router-dom";

import family1 from "./img/family1.jpg"
import family2 from "./img/family2.jpg"
import family3 from "./img/family3.jpg"
import family4 from "./img/family4.jpg"

const Family = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px py-10 bg-slate-100">
        <h1 className="font-bold text-2xl text-center pb-10">Family</h1>
        <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
          <img src={family1} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={family2} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={family3} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={family4} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center py-10">Paket penjualan</h1>
        </div>
        <div className="flex justify-center">
          <button onClick={() => navigate("/")} className="bg-bg px-4 py-2 mt-5 rounded-md hover:text-white">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};
export default Family;
