// import { useNavigate } from 'react-router-dom';
function Section5() {
  return (<>
    <div className="px bg-slate-100 py-20">
      <h1 className="text-center pb-5 text-xl font-semibold">Lokasi</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.869682713666!2d106.83691367592954!3d-6.280857661482469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f211176e9827%3A0xb4bc144c3140a2d9!2sUniversitas%20Nasional!5e0!3m2!1sid!2sid!4v1686279883649!5m2!1sid!2sid" allowfullscreen="" loading="lazy" title="lokasi" referrerpolicy="no-referrer-when-downgrade" className="w-[350px] h-[250px] sm:w-[400px] sm:h-[300px] border-[15px] border-b-[50px] border-white shadow-xl mx-auto "></iframe>
      <div className="mt-10 bg-green-500 sm:bg-red-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-[#964b00] 2xl:bg-purple-500 3xl:bg-orange-500">
        <h1>hijau = mobile, merah = sm, md = biru, lg = pink, xl = coklat, 2xl = ungu, 3xl = oren</h1>
      </div>
    </div>
  </>);
}
export default Section5;
