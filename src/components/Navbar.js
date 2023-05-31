import DXlogo2 from './img/logo/DX-logo-2.png';
function Navbar() {
  return (
    <div className="px bg-bg">
      <div className="flex items-center justify-between">
        <img src={DXlogo2} alt="Logo" width="60"></img>
        <div className="flex">
            <a href="#" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Beranda
            </a>
            <a href="#" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Tentang
            </a>
            <a href="#" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Layanan
            </a>
            <a href="./Login/loginform.html" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Login
            </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
