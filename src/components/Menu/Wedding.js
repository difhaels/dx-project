import { useNavigate } from "react-router-dom";

import wedding1 from "./img/wedding1.jpg";
import wedding2 from "./img/wedding2.jpg";
import wedding3 from "./img/wedding3.jpg";
import wedding4 from "./img/wedding4.jpg";

const Wedding = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username");

  const paket = {
    nama: "Wedding",
    jenis: ["Reguler", "Eksklusif", "Member"],
    harga: ["1.299.000", "1.999.000", "1.899.000"]
  }

  function text (nama, jenis, harga){
    let pesan = `Checkout,%20${nama}%20Paket%20${jenis}%20Rp.${harga},-`;
    return pesan;
  }

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
          <h1 className="font-bold text-3xl text-center py-10">Paket penjualan</h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">

          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg w-96">
            <div className="bg-slate-400  rounded-t-xl py-6 text-white ">
              <h1 className="font-bold text-2xl mb-2">Wedding</h1>
              <p>Paket Reguler</p>
            </div>
            <div className="bg-[#F9F5F6] rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">1.299</span>.000
              </h1>
              <p className="mt-4">1 Fotografer dan Asisten</p>
              <div className="line-paket "></div>
              <p className="mt-4">1 Hari Pemrotetan</p>
              <div className="line-paket "></div>
              <p className="mt-4">+-8 Jam Kerja</p>
              <div className="line-paket "></div>
              <p className="mt-4 ">Unlimited Photo</p>
              <div className="line-paket "></div>
              <p className="mt-4 ">Album Magnetic Custom (120 Foto 4r)</p>
              <div className="line-paket "></div>
              <p className="mt-4 pb-4">1 Flashdisk</p>
            </div>
            <a href={"http://wa.me/+62895337305533?text=" + text(paket.nama, paket.jenis[0], paket.harga[0])}target="_blank" rel="noreferrer">
              <button className="button-paket" >Book Now!!</button>
            </a>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>

          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg w-96">
            <div className="bg-slate-400  rounded-t-xl py-6 text-white ">
              <h1 className="font-bold text-2xl mb-2">Wedding</h1>
              <p>Paket Eksklusif</p>
            </div>
            <div className="bg-[#F9F5F6]  rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">1.999</span>.000
              </h1>
              <p className="mt-4">2 Fotografer dan Asisten</p>
              <div className="line-paket "></div>
              <p className="mt-4">1 Hari Pemrotetan</p>
              <div className="line-paket "></div>
              <p className="mt-4">+-8 Jam Kerja</p>
              <div className="line-paket "></div>
              <p className="mt-4 ">Unlimited Photo</p>
              <div className="line-paket "></div>
              <p className="mt-4 ">Album Magazine 20x30cm (20 Halaman)</p>
              <div className="line-paket "></div>
              <p className="mt-4 ">Album Magnetic Custom (80 Foto 4r)</p>
              <div className="line-paket "></div>
              <p className="mt-4 pb-4 ">1 Flashdisk</p>
            </div>
            <a href={"http://wa.me/+62895337305533?text=" + text(paket.nama, paket.jenis[1], paket.harga[1])} target="_blank" rel="noreferrer">
              <button className="button-paket" >Book Now!!</button>
            </a>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>

          {storedUsername !== "undefined" || undefined? 
            <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
              <div className="bg-orange-500  rounded-t-xl py-6 px-32 text-white ">
                <h1 className="font-bold text-2xl mb-2">Wedding</h1>
                <p>Paket Khusus Member</p>
              </div>
              <div className="bg-[#F9F5F6]  rounded-b-lg">
                <h1 className="pt-3">
                  Rp.<span className="text-4xl">1.899</span>.000
                </h1>
                <p className="mt-4">2 Fotografer dan Asisten</p>
                <div className="line-paket"></div>
                <p className="mt-4">1 Hari Pemrotetan</p>
                <div className="line-paket"></div>
                <p className="mt-4">+-8 Jam Kerja</p>
                <div className="line-paket"></div>
                <p className="mt-4 ">Unlimited Photo</p>
                <div className="line-paket"></div>
                <p className="mt-4 ">Album Magazine 20x30cm (20 Halaman)</p>
                <div className="line-paket"></div>
                <p className="mt-4 ">Album Magnetic Custom (80 Foto 4r)</p>
                <div className="line-paket"></div>
                <p className="mt-4 pb-4 ">1 Flashdisk</p>
              </div>
              <a href={"http://wa.me/+62895337305533?text=" + text(paket.nama, paket.jenis[2], paket.harga[2])} target="_blank" rel="noreferrer">
                <button className="button-member" >Book Now!!</button>
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
export default Wedding;
