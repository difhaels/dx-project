import { useNavigate } from "react-router-dom";

import wedding1 from "./img/wedding1.jpg"
import wedding2 from "./img/wedding2.jpg"
import wedding3 from "./img/wedding3.jpg"
import wedding4 from "./img/wedding4.jpg"

const Wedding = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px py-10 bg-slate-100">
        <h1 className="font-bold text-2xl text-center pb-10">Wedding</h1>
        <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
          <img src={wedding1} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={wedding2} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={wedding3} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={wedding4} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
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
export default Wedding;
