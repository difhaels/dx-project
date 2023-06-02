import DXlogo3 from './img/logo/DX-logo-3.png';
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="px bg-bg">
      <div className="flex items-center justify-between">
        <img src={DXlogo3} alt="Logo" width="60"></img>
        <div className="flex">
            {/* <a href="#" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Beranda
            </a>
            <a href="#" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Tentang
            </a>
            <a href="#" className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">
              Layanan
            </a> */}
            <button onClick={() => navigate("login")} className="text-text  hover:text-white px-3 py-2 rounded-lg text-sm font-medium">Login</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
