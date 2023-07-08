import family1 from "./img/section3/family1.jpg"
import graduation1 from "./img/section3/graduation1.jpg"
import group1 from "./img/section3/group1.jpg"
import group2 from "./img/section3/group2.jpg"

function Section3() {
  return (<>
    <div className="px py-16 bg-slate-100">
      <h1 className="text-center text-xl text-slate-900 font-semibold pb-10">Mini Gallery</h1>
      <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
        <img src={family1} alt="img-gallery" className="s3-gambar"/>
        <img src={graduation1} alt="img-gallery" className="s3-gambar"/>
        <img src={group1} alt="img-gallery" className="s3-gambar"/>
        <img src={group2} alt="img-gallery" className="s3-gambar"/>
      </div>
    </div>
  </>);
}
export default Section3;
