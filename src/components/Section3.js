import img1 from "./img/section3/img1.jpg"
import img2 from "./img/section3/img2.jpg"
import img3 from "./img/section3/img3.jpg"
import img4 from "./img/section3/img4.jpg"
import img5 from "./img/section3/img5.jpg"
import img6 from "./img/section3/img6.jpg"

function Section3() {
  return (<>
    <div className="px py-16">
      <h1 className="text-center text-xl text-slate-900 font-semibold pb-10">Mini Gallery</h1>
      <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
        <img src={img1} className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl"/>
        <img src={img2} className="h-[300px] w-[420px]  border-[15px] border-b-[40px] border-stone-50 shadow-2xl"/>
        <img src={img3} className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl"/>
        <img src={img4} className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl"/>
        <img src={img5} className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl"/>
        <img src={img6} className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl"/>
      </div>
    </div>
  </>);
}
export default Section3;
